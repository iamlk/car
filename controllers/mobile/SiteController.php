<?php

namespace app\controllers\mobile;

use app\controllers\base\BaseController;
use app\models\UploadModel;
use app\models\User;
use app\models\UserBusiness;
use yii\web\UploadedFile;
use yii;
use abei2017\wx\Application;

use ali\AliSMS;

class SiteController extends BaseController
{

    public function beforeAction($action){
        $this->layout = false;
        $this->uid = @Yii::$app->session->get('uid');
        return parent::beforeAction($action); // TODO: Change the autogenerated stub
    }

    public function actionTest(){
        $phone = '18681225257';
        $code = '1234';
        $sms = new AliSMS();
        try{
            $content = $sms->sendMessage($phone,$code);
            $this->data['message'] = $content->Message;
        }catch (\Exception $exception){
            $this->data['message'] = $exception->getMessage();
        }
        echo $this->data['message'];
    }

    public function actionSafeimg(){
        $model = new UploadModel();
        if (Yii::$app->request->isPost) {
            $model->image = UploadedFile::getInstances($model, 'image');
            $path = $model->upload('safe');
            if ($path) {
                $this->data['data'][] = $path;
                return $this->json();
            }else{
                return $this->json(401,'文件过大，不能超过10MB');
            }
        }else{
            return $this->json(401,'未提交内容');
        }
    }

    public function actionLogin(){
        return $this->render('login');
    }

    public function actionSubscribe(){
        return $this->render('subscribe');
    }

    public function actionIndex(){
        if(YII_ENV=='dev')
            return $this->render('index',['signature'=>['timestamp'=>0]]);

        $session = Yii::$app->session;
        if(@$_GET['path']){//分享链接方式进来
            $url = urldecode($_GET['path']);
            $url = '/mobile/site/index#'.$url;
            if(strpos($url,'?id=')){
                $tmp = explode('=',$url);
                $id = intval($tmp[1]);
                if($id) $session->set('rid',$id);
            }
            $session->set('url',$url);
            if($this->uid){//已经获取了信息，直接跳转
                $url = $session->get('url');
                $url = $url?$url:'/';
                $session->set('url',null);
                if($session->get('rid') && strpos($url,'business')){
                    $ub = UserBusiness::find()->where('uid='.$session->get('rid'))->one();
                    if($ub){
                        return $this->redirect('/mobile/api/join?key='.$ub->business_id);
                    }
                }
                return $this->redirect($url);
            }else{//准备跳转腾讯
                $oauth = (new Application())->driver('mp.oauth');
                $oauth->send();
                die();
            }
        }else{//打开链接方式
            if($this->uid){//已经获取到了信息
                $Js = (new Application())->driver('mp.js');
                $signature = $Js->signature();
                $user = User::findOne($this->uid);
                if(!$user){
                    $oauth = (new Application())->driver('mp.oauth');
                    $oauth->send();
                    die();
                }
                $signature['headimgurl'] = $user->headimgurl;
                $signature['host'] = Yii::$app->params['host'];
                return $this->render('index',['signature'=>$signature]);
            }else{
                $oauth = (new Application())->driver('mp.oauth');
                $oauth->send();
                die();
            }
        }


    }
}

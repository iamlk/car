<?php

namespace app\controllers\admin;

use app\controllers\base\AController;
use app\models\Admin;

class AdminController extends AController
{

    public function actionReset(){
        if(empty($this->post['id'])) return $this->json(402,'管理员ID不能为空');
        $model = Admin::findOne($this->post['id']);
        if(empty($model)) return $this->json(402,'该管理员不存在');
        $model->pswd = '123456';
        $model->save();
        return $this->json();
    }

    public function actionDelete(){
        if(empty($this->post['id'])) return $this->json(403,'管理员ID不能为空');
        $model = Admin::findOne($this->post['id']);
        if(empty($model)) return $this->json(403,'该管理员不存在');
        $model->delete();
        return $this->json();
    }

    public function actionList()
    {
        $p = intval($this->post['p'])?$this->post['p']:1;
        $count = Admin::find()->count();
        $list = Admin::find()->offset(($p-1)*20)->limit(20)->all();
        $data = ['total'=>intval($count)];
        $l2 = [];
        foreach($list as $li){
            $tmp = $li->attributes;
            $tmp['role_name'] = $li->role->role;
            $l2[] = $tmp;
        }
        $data['list'] = $l2;
        $this->data['data'] = $data;
        return $this->json();
    }

    public function actionAdd()
    {
        $model = new Admin();
        $model->attributes = $this->post;
        if($model->save()) {
            return $this->json();
        }else{
            $list = $model->getFirstErrors();
            $msg = '';
            foreach($list as $key=>$value){
                $msg .= $value;
            }
            return $this->json(401,$msg);
        }
    }

    public function actionPassword(){
        $aid = \Yii::$app->session->get('aid');
        $model = Admin::findOne($aid);
        if(empty($model)) return $this->json(402,'该管理员不存在');
        $model->pswd = $this->post['pswd'];
        if($model->save()) {
            return $this->json();
        }else{
            $list = $model->getFirstErrors();
            $msg = '';
            foreach($list as $key=>$value){
                $msg .= $value;
            }
            return $this->json(402,$msg);
        }
    }

    public function actionAdmin(){
        $model = Admin::findOne($this->post['id']);
        if(empty($model)) return $this->json(404,'没有找到该管理员');
        $this->data['data'] = $model->attributes;
        return $this->json();
    }

    public function actionEdit(){
        if(empty($this->post['id'])) return $this->json(402,'管理员ID不能为空');
        $model = Admin::findOne($this->post['id']);
        if(empty($model)) return $this->json(402,'该管理员不存在');
        unset($this->post['pswd']);
        $model->attributes = $this->post;
        if($model->save()) {
            return $this->json();
        }else{
            $list = $model->getFirstErrors();
            $msg = '';
            foreach($list as $key=>$value){
                $msg .= $value;
            }
            return $this->json(402,$msg);
        }
    }

}

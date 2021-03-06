<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "banner".
 *
 * @property int $id
 * @property string $img
 * @property int $outdate 到期时间
 * @property string $url
 * @property int $created 创建时间
 */
class Banner extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'banner';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['outdate', 'created'], 'integer'],
            [['img', 'url'], 'string', 'max' => 250],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'img' => 'Img',
            'outdate' => '到期时间',
            'url' => 'Url',
            'created' => '创建时间',
        ];
    }
}

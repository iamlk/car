<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "admin".
 *
 * @property int $id
 * @property string $admin
 * @property string $pswd
 * @property int $role_id
 * @property string $name
 * @property string $sex
 * @property string $phone
 */
class Admin extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'admin';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['role_id'], 'required'],
            [['role_id'], 'integer'],
            [['admin'], 'string', 'max' => 20],
            [['pswd'], 'string', 'max' => 64],
            [['name'], 'string', 'max' => 10],
            [['sex'], 'string', 'max' => 2],
            [['phone'], 'string', 'max' => 15],
            [['admin'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'admin' => '登录名',
            'pswd' => '密码',
            'role_id' => '角色ID',
            'name' => '姓名',
            'sex' => '性别',
            'phone' => '电话',
        ];
    }
}

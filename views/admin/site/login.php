

<!DOCTYPE html>
<html>

<head>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width,initial-scale=1">
    <title>ayk-admin</title>
    <?php if(YII_ENV=='dev'):?>
    <?php else:?>
        <link href="/static/admin/css/login.css?<?php echo time();?>" rel="stylesheet">
    <?php endif;?>
    
</head>

<body module=live>
    <div id=app></div>
    <?php if(YII_ENV=='dev'):?>
        <script type="text/javascript" src="http://localhost:8090/login.js"></script>
    <?php else:?>
        <script type="text/javascript" src="/static/admin/js/manifest.js?<?php echo time();?>"> </script>
        <script type="text/javascript" src="/static/admin/js/vendor.js?<?php echo time();?>"> </script>
        <script type="text/javascript" src="/static/admin/js/login.js?<?php echo time();?>"> </script>
    <?php endif;?>
</body>

</html>

<?php

/* @var $this yii\web\View */

$this->title = 'My Yii Application';
$this->registerJsFile('http://localhost:1337/vendor.js');
$this->registerJsFile('http://localhost:1337/firstWidget.js');
$this->registerJsFile('http://localhost:1337/secondWidget.js');
?>
<div class="site-index">
    <div class="jumbotron">
        <h1>Congratulations!</h1>

        <p class="lead">You have successfully created your Yii-powered application.</p>

        <p><a class="btn btn-lg btn-success" href="http://www.yiiframework.com">Get started with Yii</a></p>
    </div>

    <div class="body-content">

        <div class="row">
            <div class="col-lg-6">
                <div id="first-root"></div>
            </div>
            <div class="col-lg-6">
                <div id="second-root"></div>
            </div>
        </div>

    </div>
</div>

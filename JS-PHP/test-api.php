<!DOCTYPE html>
<html lang="it">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>MusiXMatch API Tester</title>
        <?php
            include('./utility/header-include.php');
        ?>
    </head>
    <body>
        <div class="container-fluid">
            <?php    
                include('./components/topbar.php');
            ?>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3">
                        <?php 
                            include('./components/sidebar.php');
                        ?>
                    </div>
                    <div class="col-md-9">
                        <?php
                            include('./components/api.php');
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
            include('./utility/footer-include.php');
        ?>
    </body>
</html>
<?php

require_once './dbConfig.php';



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

 

    $Name= $_POST['Name'];
    $Email =  $_POST["Email"];
    $Password =  $_POST["Password"];
    $client = new register();
    $Success=null;
    if(!$client->EmailExists($Email)){
        $Success = $client->AddUser(
          $Name,
          $Email,
          $Password
      );
      echo  "true";
    }
    else{
      echo "false";
    }
  
    if ($Success) {
        echo "true";
    }

}



class register

{

    public $pdo;
    // Establish connection with the Database
    public function __construct()
    {

        try {

            $this->pdo = new PDO("mysql:host=" . DBHOST . ";dbname=" . DBNAME, DBUSER, DBPASSWORD);

            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
        }

    }
    // Add User to Database 
    public function AddUser(
        $Name,
        $Email,
        $Password
    ) {
        try {
          $sql = "INSERT INTO user(

            Name,
            Email,
            Password
        ) values(
            :Name,
            :Email,
            :Password)";

        $stmt = $this->pdo->prepare($sql);

        $stmt->execute(array(':Name' => $Name,':Email' =>$Email,':Password' => $Password));

        // Send Mail to the email
        $to      = $Email;
        $subject = 'Contact Soon';
        $message = '
        <html>
            <body>
              <table
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="
                  font-size: 14px;
                  padding: 30px 10px;
                  font-family: Open Sans, Helvetica, Arial, sans-serif !important;
                  background: rgb(255, 255, 255);
                  background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 1) 0%,
                    rgba(121, 173, 213, 1) 90%
                  );
                "
              >
                <tbody>
                  <tr>
                    <td align="center">
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="min-width: 368px; max-width: 580px"
                      >
                        <tbody>
                        
                          <tr>
                            <td
                              colspan="3"
                              style="
                                padding: 30px;
                                background: #fff;
                                color: #0b2838;
                                font-size: 14px;
                                line-height: 24px;
                              "
                            >
                              <p style="margin: 0">
                                <div style="color: #236fa1; line-height: 130%; text-align: center; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 130%;"><span style="font-size: 48px; line-height: 62.4px;"><span style="line-height: 62.4px; font-size: 48px;">Thank You For Reaching Us Out!</span></span></p>
                              <p style="font-size: 14px; line-height: 130%;"><span style="font-size: 48px; line-height: 62.4px;"><span style="line-height: 62.4px; font-size: 24px;">We will contact you soon.</span></span></p>
                                </div>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colspan="3"
                              style="
                                text-align: center;
                                padding: 20px;
                                background: #f6f2f3;
                                color: #093952;
                                font-size: 12px;
                              "
                            >
                              All copyright Reserved
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </body>
        </html>
        ';
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From: designco@designcodey.com' . "\r\n" .
            'Reply-To: designco@designcodey.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);

        } catch (Exception $err) {
          echo $err;
        }
      
    }
    // Check if Email Exists
    public function EmailExists($Email){
        $sql = "SELECT Email FROM user WHERE Email=:Email";
        $query = $this->pdo->prepare($sql);
        $query->execute(array(':Email' =>$Email));
        if( $query->rowCount() > 0 ) { 
            return true;
        }
        else {
            return false;
        }
    }


}


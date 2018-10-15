<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Big Day Out 2009 - Buy Tickets</title>

<link href="css/styles.css" rel="stylesheet" type="text/css" />

<!--[if lt IE 7]>
<link href="css/ie_styles.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="scripts/unitpngfix.js"></script>
<![endif]-->

<script type="text/javascript" src="scripts/validateform.js"></script>



</head>

<body>

<div id="container">
        <div id="header">
            <img src="images/logo.png" id="logo"/>
        
            <div id="navigation">
                <ul id="nav">
                    <li id="home"><a href="home.html">home</a></li>
                    <li id="lineup"><a href="lineup.html">lineup</a></li>
                    <li id="tickets"><a href="tickets.html">tickets</a></li>
                    <li id="gallery"><a href="gallery.html">gallery</a></li>
                    <li id="forum"><a href="forum.html">forum</a></li>
                </ul>
            </div><!-- end #navigation -->
        </div><!-- end #header -->
    
    <div id="content">
    	
    	<div id="ticketsheader">
            <div id="ticketsintro"> 
                <p class="topmargin">
                Fill in your details below to make a ticket enquiry. We will 
                contact you when Auckland tickets go on sale.
                <br />
                <br />
                Alternatively you can purchase your tickets at any Real Groovy store.
                </p>
                     
            </div><!-- end #ticketsintro -->
        
            <div id="ticketspagead">
                <img class="rockad" src="images/rockad.gif" />
            </div>

		<div class="clearfloat"></div>
        </div><!-- end #ticketsheader -->
           
        <div id="formcontainer">   
        <div id="formfield">
        
        <form name="ticketform" action="http://labs.mdslounge.com/php/send_email.php" method="post">
            
            <label class="formlabel">Name:</label>
            <input class="textbox" id="name" name="name" value="" maxlength="30" onBlur="CheckName()" />
            <div class="validate" id="valname">
            </div>
            
            <label class="formlabel">Email:</label>
            <input class="textbox" id="email" name="email" value="" maxlength="50" onBlur="CheckEmail()" />
            <div class="validate" id="valemail">
            </div>
            
            <input class="hidden" id="recipient" name="recipient" value="shadowfox.nz@gmail.com" maxlength="20" /><!--test address -->
            
            <label class="formlabel">Subject:</label>
            <input class="textbox" name="subject" value="Ticket Enquiry" maxlength="30" />
            
            <label class="formlabel">Enquiry:</label>
            <input class="commentbox" name="enquiry" value="" />
            
            <input class="submitbutton" type="submit" value="" onclick="return ValidateAll()" />
            
        </form>
        
        </div><!-- end #formfield -->
        
        <div id="ticketekinfo">
        	<img src="images/ticketek.gif" />
            <p class="ticketekinfo">
            Big Day Out 2009 tickets handled by Ticketek. Visit <a class="ticketek" href="#">www.ticketek.com</a> for more information.
            </p>
        </div>
        
        <div class="clearfloat"></div>
        
        </div><!-- end #formcontainer -->
        
        
        
         
    
    	<div id="baseline"></div><!-- contains black bottom scribbly edge of content -->
    </div><!-- end #content -->

</div><!-- end #container -->

<div id="textnavigation">
        <ul id="textnav">
            <li><a class="textnav" href="home.html">home</a></li>
            <li><a class="textnav" href="lineup.html">lineup</a></li>
            <li><a class="textnav" href="tickets.html">tickets</a></li>
            <li><a class="textnav" href="gallery.html">gallery</a></li>
            <li><a class="textnav" href="forum.html">forum</a></li>
        </ul>
        
        <p>
        This site was designed for educational purposes only. It is NOT the real BDO website.<br />
        2007 &copy; Tanya Gray - Media Design School
        </p>
</div><!-- end #textnavigation -->

</body>
</html>

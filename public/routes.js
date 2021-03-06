<!DOCTYPE html>
<!-- saved from url=(0068)https://scotch.io/tutorials/easy-node-authentication-setup-and-local -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>Easy Node Authentication: Setup and Local ― Scotch</title>

<link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64 96x96" href="https://scotch.io/favicon.ico">
<link rel="apple-touch-icon" sizes="57x57" href="https://scotch.io/img/icons/gold/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="114x114" href="https://scotch.io/img/icons/gold/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="72x72" href="https://scotch.io/img/icons/gold/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="144x144" href="https://scotch.io/img/icons/gold/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="60x60" href="https://scotch.io/img/icons/gold/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="120x120" href="https://scotch.io/img/icons/gold/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="76x76" href="https://scotch.io/img/icons/gold/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="152x152" href="https://scotch.io/img/icons/gold/apple-touch-icon-152x152.png">
<link rel="icon" type="image/png" href="https://scotch.io/img/icons/gold/favicon-196x196.png" sizes="196x196">
<link rel="icon" type="image/png" href="https://scotch.io/img/icons/gold/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="https://scotch.io/img/icons/gold/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="https://scotch.io/img/icons/gold/favicon-16x16.png" sizes="16x16">
<link rel="icon" type="image/png" href="https://scotch.io/img/icons/gold/favicon-128.png" sizes="128x128">
<meta name="application-name" content="Scotch">
<meta name="msapplication-TileColor" content="#FFFFFF">
<meta name="msapplication-TileImage" content="/img/icons/gold/mstile-144x144.png">
<meta name="msapplication-square70x70logo" content="/img/icons/gold/mstile-70x70.png">
<meta name="msapplication-square150x150logo" content="/img/icons/gold/mstile-150x150.png">
<meta name="msapplication-wide310x150logo" content="/img/icons/gold/mstile-310x150.png">
<meta name="msapplication-square310x310logo" content="/img/icons/gold/mstile-310x310.png">
<meta name="theme-color" content="#EDD07E">
<link rel="alternate" hreflang="en" type="application/rss+xml" href="https://scotch.io/feed" title="Scotch RSS Feed">

<meta name="author" content="Chris Sevilleja">
<link rel="canonical" href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local">
<link rel="amphtml" href="https://scotch.io/amp/tutorials/easy-node-authentication-setup-and-local">

<meta name="twitter:url" content="http://scotch.io/tutorials/easy-node-authentication-setup-and-local">
<meta name="twitter:title" content="Easy Node Authentication: Setup and Local">
<meta name="twitter:description" content="
  This tutorial has been updating for ExpressJS 4.0. Read more here.

  Edit 11/18/2017: Updated to reflect Facebook API changes. Updating dependencies in package.">
<meta name="twitter:image" content="https://scotch.io/wp-content/uploads/2013/12/node-authentication-header.jpg">
<meta name="twitter:creator" content="chrisoncode">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@scotch_io">

<meta property="og:title" content="Easy Node Authentication: Setup and Local">
<meta property="og:image" content="https://scotch.io/wp-content/uploads/2013/12/node-authentication-header.jpg">
<meta property="og:description" content="
  This tutorial has been updating for ExpressJS 4.0. Read more here.

  Edit 11/18/2017: Updated to reflect Facebook API changes. Updating dependencies in package.">
<meta property="article:author" content="sevilayha">
<meta property="fb:admins" content="579622216,709634581">
<meta property="fb:app_id" content="1389892087910588">
<meta property="og:url" content="http://scotch.io/tutorials/easy-node-authentication-setup-and-local">
<meta property="og:type" content="article">
<meta property="article:publisher" content="https://www.facebook.com/scotchdevelopment">
<meta property="og:site_name" content="Scotch">

<link rel="publisher" href="https://plus.google.com/b/113854128330570384219">
<link rel="author" href="https://scotch.io/tutorials/ChrisSevilleja-scotch">
<meta itemprop="description" content="
  This tutorial has been updating for ExpressJS 4.0. Read more here.

  Edit 11/18/2017: Updated to reflect Facebook API changes. Updating dependencies in package.">
<meta itemprop="image" content="https://scotch.io/wp-content/uploads/2013/12/node-authentication-header.jpg">
<meta name="google-site-verification" content="NoKkRtzSguNO3Xd1cuhpVkUoh7n8mz-aofV9Ch4aS8w">
<meta name="article_category" data-category="authentication">
<meta name="article_tags" content="authentication">
<meta name="article_tags" content="node.js">
<link rel="stylesheet" href="./routes_files/fonts.css">
<link rel="stylesheet" href="./routes_files/brush-strokes-66523e4894.css">
<script async="" src="./routes_files/analytics.js.download"></script><script async="" src="https://a.pub.network/scotch.io/pubfig.min.js"></script><script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Scotch",
  "url": "https://scotch.io",
  "sameAs": [
    "http://www.facebook.com/scotchdevelopment",
    "http://twitter.com/scotch_io",
    "http://instagram.com/scotch_io",
    "http://www.linkedin.com/in/scotch_io",
    "http://plus.google.com/scotch_io"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "WebSite",
  "name": "Scotch",
  "alternateName": "Scotch Development",
  "url": "https://scotch.io"
}
</script>
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "http://scotch.io/tutorials/easy-node-authentication-setup-and-local"
  },
  "headline": "Easy Node Authentication: Setup and Local",
  "image": {
    "@type": "ImageObject",
    "url": "https://scotch.io/wp-content/uploads/2013/12/node-authentication-header.jpg",
    "height": 1500,
    "width": 750
  },
    "datePublished": "2016-07-12 19:35:49",
      "dateModified": "2018-03-02 02:01:07",
      "author": {
    "@type": "Person",
    "name": "Chris Sevilleja"
  },
    "publisher": {
    "@type": "Organization",
    "name": "Scotch",
    "logo": {
      "@type": "ImageObject",
      "url": "https://scotch.io/img/school-logo-sticker.png",
      "width": 37,
      "height": 60
    }
  },
  "description": "
  This tutorial has been updating for ExpressJS 4.0. Read more here.

  Edit 11/18/2017: Updated to reflect Facebook API changes. Updating dependencies in package."
}
</script>
<script data-cfasync="false">
        var freestar     = freestar || {};
        freestar.hitTime = Date.now();
        freestar.queue   = freestar.queue || [];
        freestar.config  = freestar.config || {};
        freestar.debug   = window.location.search.indexOf('fsdebug') === -1 ? false : true;

        // Tag IDs set here, must match Tags served in the Body for proper setup
         // if is single page
            freestar.config.enabled_slots = [
                "div-gpt-ad-leaderboard-ATF", 
                "div-gpt-ad-flex-inpage", 
                "div-gpt-ad-300x250-Sidebar", 
                "Scotch.io_300x250_300x600_Sidebar_BTF"
            ]
            </script>
<script>
                    !function(a,b){var c=b.getElementsByTagName("script")[0],d=b.createElement("script"),e="https://a.pub.network/scotch.io";e+=freestar.debug?"/qa/pubfig.min.js":"/pubfig.min.js",d.async=!0,d.src=e,c.parentNode.insertBefore(d,c)}(window,document);
            </script>
<script type="text/javascript" charset="utf-8" async="" src="./routes_files/button.5f64a1a5864e1229f84c8defd65341b4.js.download"></script></head>
<body class="learn single authentication node-js activate-header-super-duper-sticky-mode">
<header id="site__header" class="top-info">
<div class="container is-fluid">
<div class="scotch-top-logo toggle-mobile-menu visible-xs">
<a href="https://scotch.io/">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 360 360" xml:space="preserve" width="50" height="80">
<style type="text/css">
    .st0{fill:#333333;}
    .st1{fill:#FFFFFF;}
    .st2{fill:#EC008C;}
    .st3{clip-path:url(#XMLID_8_);}
    .st4{fill:#ECD27C;}
    .st5{opacity:0.7;fill:#CBA543;}
    .st6{clip-path:url(#XMLID_8_);fill:#ECD27C;}
    .st7{opacity:0.7;clip-path:url(#XMLID_8_);fill:#CBA543;}
    .st8{opacity:0.98;clip-path:url(#XMLID_8_);fill:#CBA543;}
    .st9{opacity:0.98;clip-path:url(#XMLID_8_);fill:#ECD27C;}
    .st10{opacity:0.98;clip-path:url(#XMLID_8_);fill:#A27B2E;}
</style>
<path id="XMLID_1_" class="st0" d="M212.2,57h23.1l1.5,29c2.6,25,7.1,39.9,11.1,53.1c3.7,12.2,7.1,23.7,8.4,39.9
    c2.7,34.6-23.4,56.1-31.9,63.1l-0.1,0.1c-0.5,0.4-1,0.8-1.4,1.1c-0.2,0.2-0.4,0.4-0.5,0.5c0,0.1,0.1,0.5,0.1,0.5
    c0.6,1.6,3.7,8,5.4,11.5c1.2,2.5,2.4,4.9,3.2,6.7c0.3,0.6,0.6,1.2,0.9,1.9c1.6,3.2,4.1,8.1,4.6,13.6c0.8,8.3-2.7,15.3-10,19.7
    c-5.9,3.6-17.4,5.8-34.2,6.7v0.3l-10,0c-0.2,0-0.9,0-2,0c-1.1,0-1.8,0-2,0h-10v-0.4c-16.9-0.9-28.3-3.1-34.2-6.7
    c-7.3-4.4-10.9-11.4-10-19.7c0.6-5.5,3-10.4,4.6-13.6c0.3-0.7,0.6-1.3,0.9-1.9c0.9-1.8,2-4.2,3.2-6.7l0-0.1
    c1.7-3.5,4.7-9.8,5.3-11.4c0,0,0.1-0.3,0.1-0.5c-0.1-0.1-0.3-0.3-0.5-0.5c-0.4-0.3-0.8-0.7-1.4-1.1l-0.1-0.1
    c-8.5-7.1-34.6-28.5-31.9-63.1c1.3-16.2,4.7-27.7,8.4-39.9c4-13.2,8.5-28.1,11.1-53.1l1.5-29h23.1"></path>
<path id="XMLID_3_" class="st1" d="M216.5,235.7c0.4-0.4,1-0.8,1.6-1.3c8.4-6.9,30.6-25.2,28.3-54.6c-1.2-15.2-4.3-25.6-8-37.8
    c-4.1-13.6-8.8-29.1-11.5-55.2l-1-19.3l-3.1,0.2l1,19.3l0,0.1c2.8,26.4,7.5,42,11.6,55.8c3.6,12,6.7,22.3,7.9,37.1
    c2,25.2-15.4,42-24.6,49.9v0c-39.3,28.4-76.3,0-76.3,0l0,0c-9.2-7.9-26.6-24.7-24.6-49.9c1.1-14.8,4.3-25.2,7.9-37.1
    c4.2-13.8,8.9-29.4,11.6-55.8l1-19.4l-3.1-0.2l-1,19.3c-2.7,26-7.4,41.5-11.5,55.2c-3.7,12.1-6.8,22.6-8,37.8
    c-2.3,29.4,19.9,47.7,28.3,54.6c0.6,0.5,1.1,0.9,1.6,1.3c5.5,4.7,4.1,9.4,3.5,11.5l-0.1,0.3c-0.4,1.2-3.4,7.6-5.8,12.7
    c-1.2,2.5-2.3,4.9-3.2,6.7c-0.3,0.7-0.7,1.4-1,2.1c-2.8,5.5-7.4,14.8,1.6,20.3c7.4,4.5,29.9,5.4,39,5.6v0c0.2,0,0.9,0,2,0
    c1.1,0,1.8,0,2,0v0c9.2-0.2,31.6-1.1,39-5.6c9.1-5.5,4.4-14.8,1.6-20.3c-0.4-0.7-0.7-1.5-1-2.1c-0.8-1.8-2-4.2-3.2-6.7
    c-2.4-5.1-5.5-11.4-5.8-12.7l-0.1-0.3C212.4,245.2,210.9,240.4,216.5,235.7z"></path>
<path id="XMLID_4_" class="st2" d="M236,187"></path>
<g id="XMLID_5_">
<defs>
<ellipse id="XMLID_9_" cx="180.5" cy="180.4" rx="54.5" ry="53.7"></ellipse>
</defs>
<clippath id="XMLID_8_">
<use xlink:href="#XMLID_9_" style="overflow:visible;"></use>
</clippath>
<g id="XMLID_6_" class="st3">
<path id="XMLID_31_" class="st4" d="M235.4,187.3c0,0.1,0,0.1,0,0.2C235.4,187.4,235.4,187.4,235.4,187.3z"></path>
<path id="XMLID_35_" class="st4" d="M147.4,224.3c3.5,2.5,9.9,6.5,18.6,8.8c-6.5-1.7-12.8-4.7-18.8-8.9
            C147.3,224.2,147.3,224.2,147.4,224.3z"></path>
<path id="XMLID_37_" class="st4" d="M200.2,230.7c-5.2,2-11.7,3.7-18.9,4C187.8,234.4,194,233.1,200.2,230.7z"></path>
<path id="XMLID_38_" class="st4" d="M125.9,191.1v0.3c0.5,10.3,5.5,18.8,13.8,26.5c-5.2-5.3-11.6-14.1-12.8-26.2
            C126.1,190.3,125.9,189.8,125.9,191.1z"></path>
<path id="XMLID_42_" class="st4" d="M167.3,233.4c-0.2-0.1-0.4-0.1-0.7-0.2C166.9,233.3,167.1,233.3,167.3,233.4z"></path>
<path id="XMLID_68_" class="st4" d="M180.7,234.7C180.8,234.7,180.8,234.7,180.7,234.7C180.8,234.7,180.7,234.7,180.7,234.7
            C180.7,234.7,180.7,234.7,180.7,234.7z"></path>
<path id="XMLID_78_" class="st4" d="M219.9,217.7c-0.3,0.4-0.7,0.7-1,1.1C219.2,218.4,219.6,218.1,219.9,217.7z"></path>
<path id="XMLID_79_" class="st4" d="M169.5,233.8c-0.1,0-0.2,0-0.3-0.1C169.3,233.8,169.4,233.8,169.5,233.8z"></path>
<path id="XMLID_80_" class="st4" d="M177.8,234.7C177.8,234.7,177.7,234.7,177.8,234.7C177.7,234.7,177.8,234.7,177.8,234.7z"></path>
<path id="XMLID_81_" class="st4" d="M213.8,223.5c1.7-1.5,3.2-2.9,4.6-4.3C217,220.6,215.4,222.1,213.8,223.5
            C213.7,223.5,213.8,223.5,213.8,223.5z"></path>
<path id="XMLID_82_" class="st5" d="M146.7,223.8c0.2,0.1,0.4,0.3,0.6,0.4c-2.7-2-5.3-4.1-7.5-6.2
            C143.5,221.8,146.7,223.8,146.7,223.8z"></path>
<path id="XMLID_83_" class="st5" d="M166.6,233.2c-0.2-0.1-0.4-0.1-0.6-0.2C166.2,233.1,166.4,233.2,166.6,233.2z"></path>
<path id="XMLID_85_" class="st5" d="M169.2,233.8c-0.7-0.1-1.3-0.3-1.9-0.4C167.9,233.5,168.6,233.7,169.2,233.8z"></path>
<path id="XMLID_86_" class="st5" d="M219.9,217.7c10.1-10.2,14.7-19.3,15.5-30.2C234.5,197.3,230.9,206.6,219.9,217.7z"></path>
<path id="XMLID_87_" class="st5" d="M235.4,187C235.4,187,235.4,187,235.4,187c0,0.1,0,0.2,0,0.3
            C235.4,187.2,235.4,187.1,235.4,187z"></path>
<path id="XMLID_88_" class="st5" d="M218.9,218.8c-0.2,0.2-0.3,0.3-0.5,0.5C218.6,219.1,218.7,218.9,218.9,218.8z"></path>
<path id="XMLID_89_" class="st5" d="M213.5,223.8c0.1-0.1,0.2-0.2,0.3-0.2c-4.6,3-9.1,5.4-13.5,7.1
            C207.7,227.8,212.6,224.4,213.5,223.8z"></path>
<path id="XMLID_90_" class="st5" d="M179.1,234.7c0.5,0,1,0,1.5,0c-1,0-1.9,0-2.9,0C178.2,234.7,178.7,234.7,179.1,234.7z"></path>
<path id="XMLID_91_" class="st5" d="M177.7,234.7c-2.9-0.1-5.6-0.4-8.2-0.9C172.2,234.3,175,234.6,177.7,234.7z"></path>
<path id="XMLID_92_" class="st5" d="M181.4,234.7c-0.2,0-0.4,0-0.5,0C181,234.7,181.2,234.7,181.4,234.7z"></path>
</g>
<path id="XMLID_39_" class="st6" d="M420.8,224.7c-5.2,2-11.7,3.7-18.9,4C408.4,228.4,414.6,227.1,420.8,224.7z"></path>
<path id="XMLID_40_" class="st6" d="M398.3,228.7C398.3,228.7,398.3,228.7,398.3,228.7C398.3,228.7,398.3,228.7,398.3,228.7z"></path>
<path id="XMLID_43_" class="st6" d="M401.3,228.7C401.3,228.7,401.3,228.7,401.3,228.7C401.3,228.7,401.3,228.7,401.3,228.7
        C401.2,228.7,401.3,228.7,401.3,228.7z"></path>
<path id="XMLID_46_" class="st6" d="M390.1,227.8c-0.1,0-0.2,0-0.3-0.1C389.9,227.8,390,227.8,390.1,227.8z"></path>
<path id="XMLID_48_" class="st6" d="M387.9,227.4c-0.2-0.1-0.4-0.1-0.7-0.2C387.4,227.3,387.6,227.3,387.9,227.4z"></path>
<path id="XMLID_71_" class="st7" d="M389.8,227.8c-0.7-0.1-1.3-0.3-1.9-0.4C388.5,227.5,389.1,227.7,389.8,227.8z"></path>
<path id="XMLID_72_" class="st7" d="M387.2,227.2c-0.2-0.1-0.4-0.1-0.6-0.2C386.8,227.1,387,227.2,387.2,227.2z"></path>
<path id="XMLID_74_" class="st7" d="M399.7,228.7c0.5,0,1,0,1.5,0c-1,0-1.9,0-2.9,0C398.8,228.7,399.2,228.7,399.7,228.7z"></path>
<path id="XMLID_75_" class="st7" d="M398.3,228.7c-2.9-0.1-5.6-0.4-8.2-0.9C392.8,228.3,395.5,228.6,398.3,228.7z"></path>
<path id="XMLID_76_" class="st7" d="M401.9,228.7c-0.2,0-0.4,0-0.5,0C401.5,228.7,401.7,228.7,401.9,228.7z"></path>
<g id="XMLID_2_" class="st3">
<path id="XMLID_36_" class="st4" d="M236.2,187.3c0,0.1,0,0.1,0,0.2C236.2,187.4,236.2,187.4,236.2,187.3z"></path>
<path id="XMLID_41_" class="st4" d="M148.2,224.3c3.5,2.5,9.9,6.5,18.6,8.8c-6.5-1.7-12.8-4.7-18.8-8.9
            C148.1,224.2,148.2,224.2,148.2,224.3z"></path>
<path id="XMLID_45_" class="st4" d="M220.8,217.7c-0.3,0.4-0.7,0.7-1,1.1C220.1,218.4,220.4,218.1,220.8,217.7z"></path>
<path id="XMLID_47_" class="st4" d="M214.6,223.5c1.7-1.5,3.2-2.9,4.6-4.3C217.8,220.7,216.2,222.1,214.6,223.5
            C214.6,223.5,214.6,223.5,214.6,223.5z"></path>
<path id="XMLID_67_" class="st5" d="M214.3,223.8c0.1-0.1,0.2-0.2,0.3-0.2c-4.6,3-9.1,5.4-13.5,7.1
            C208.5,227.8,213.5,224.4,214.3,223.8z"></path>
<path id="XMLID_69_" class="st5" d="M220.8,217.7c10.1-10.2,14.7-19.3,15.5-30.2C235.4,197.3,231.7,206.6,220.8,217.7z"></path>
<path id="XMLID_70_" class="st5" d="M219.7,218.8c-0.2,0.2-0.3,0.3-0.5,0.5C219.4,219.1,219.6,218.9,219.7,218.8z"></path>
<path id="XMLID_73_" class="st5" d="M236.3,187C236.3,187,236.3,187,236.3,187c0,0.1,0,0.2,0,0.3
            C236.3,187.2,236.3,187.1,236.3,187z"></path>
<path id="XMLID_77_" class="st5" d="M147.5,223.8c0.2,0.1,0.4,0.3,0.6,0.4c-2.7-2-5.3-4.1-7.5-6.2
            C144.3,221.8,147.5,223.8,147.5,223.8z"></path>
</g>
<path id="XMLID_34_" class="st8" d="M190.2,195.6c31.9,39.7,45-7.9,45.2-8.6c0.3-3.7,0.2-7.5,0-11.5c0,0-4.6-46.9-47.6-2.8
        c-3.6,3.7-7,6.9-10.2,9.8C181.8,186.1,186,190.4,190.2,195.6z"></path>
<path id="XMLID_84_" class="st9" d="M177.7,182.6c-27.2-23.1-51.5-11.7-50.9,6.6c0,0.8,0.1,1.7,0.2,2.5
        C130,197,141.5,215,177.7,182.6z"></path>
<path id="XMLID_93_" class="st10" d="M235.4,187.3c0-0.1,0-0.2,0-0.3c-0.2,0.7-13.3,48.3-45.2,8.6c-4.2-5.2-8.4-9.5-12.5-13
        c-36.2,32.4-47.6,14.4-50.7,9.1c1.2,12.2,7.6,21,12.8,26.2c2.3,2.1,4.8,4.2,7.5,6.2c6,4.2,12.3,7.2,18.8,8.9
        c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.7,0.2c0.6,0.1,1.3,0.3,1.9,0.4c0.1,0,0.2,0,0.3,0.1c2.6,0.5,5.3,0.8,8.2,0.9
        c0,0,0,0,0.1,0c0.9,0,1.9,0,2.9,0c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0,0.5,0c7.2-0.3,13.6-2,18.9-4c4.4-1.8,8.9-4.1,13.5-7.1
        c1.7-1.5,3.2-2.9,4.7-4.3c0.2-0.2,0.3-0.3,0.5-0.5c0.4-0.4,0.7-0.7,1-1.1c11-11.2,14.6-20.4,15.5-30.2
        C235.4,187.4,235.4,187.4,235.4,187.3z"></path>
</g>
<path id="XMLID_10_" class="st2" d="M179.8,187"></path>
<path id="XMLID_11_" class="st2" d="M170.1,187"></path>
</svg>
</a>
</div>
<button class="delete is-large is-danger toggle-mobile-menu"></button>

<div class="site-header__top columns is-gapless">
<nav class="main-nav is-hidden-mobile column is-5 center-flex">
<ul class="has-text-right">
<li class="nav-item--primary visible-xs"><a href="https://scotch.io/">Home</a></li>
<li class="nav-item--primary"><a href="https://scotch.io/courses">
Courses
</a></li>
<li class="navbar-item has-dropdown is-hoverable">
<a class="navbar-link" href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials">Tutorials</a>
<div class="navbar-dropdown is-hidden-mobile">
<a class="navbar-item" href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=angular">
<span class="background-angular"></span>
Angular
</a>
<a class="navbar-item" href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=react">
<span class="background-react"></span>
React
</a>
<a class="navbar-item" href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=vue">
<span class="background-vue"></span>
Vue
</a>
<a class="navbar-item" href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=node.js">
<span class="background-node"></span>
Node
</a>
<a class="navbar-item" href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=laravel">
<span class="background-laravel"></span>
Laravel
</a>
<a class="navbar-item" href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Community">
Community Posts
</a>
</div>
</li>
<li class="navbar-item has-dropdown is-hoverable is-hidden-mobile hidden-sm hidden-md">
<a class="navbar-link" href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials">Extras</a>
<div class="navbar-dropdown is-hidden-mobile">
<a class="navbar-item" href="https://scotch.io/books/first-node-app">Free Node eBook</a>
<a class="navbar-item" href="https://scotch.io/top-authors">Top Authors</a>
<a class="navbar-item" href="https://shop.scotch.io/">Shop</a>
</div>
</li>
<li class="nav-item--primary visible-xs"><a href="https://scotch.io/search">Search</a></li>
</ul>
</nav>
<div class="scotch-top-logo is-hidden-mobile column is-2">
<a href="https://scotch.io/">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 360 360" xml:space="preserve" width="70" height="100">
<style type="text/css">
    .st0{fill:#333333;}
    .st1{fill:#FFFFFF;}
    .st2{fill:#EC008C;}
    .st3{clip-path:url(#XMLID_8_);}
    .st4{fill:#ECD27C;}
    .st5{opacity:0.7;fill:#CBA543;}
    .st6{clip-path:url(#XMLID_8_);fill:#ECD27C;}
    .st7{opacity:0.7;clip-path:url(#XMLID_8_);fill:#CBA543;}
    .st8{opacity:0.98;clip-path:url(#XMLID_8_);fill:#CBA543;}
    .st9{opacity:0.98;clip-path:url(#XMLID_8_);fill:#ECD27C;}
    .st10{opacity:0.98;clip-path:url(#XMLID_8_);fill:#A27B2E;}
</style>
<path id="XMLID_1_" class="st0" d="M212.2,57h23.1l1.5,29c2.6,25,7.1,39.9,11.1,53.1c3.7,12.2,7.1,23.7,8.4,39.9
    c2.7,34.6-23.4,56.1-31.9,63.1l-0.1,0.1c-0.5,0.4-1,0.8-1.4,1.1c-0.2,0.2-0.4,0.4-0.5,0.5c0,0.1,0.1,0.5,0.1,0.5
    c0.6,1.6,3.7,8,5.4,11.5c1.2,2.5,2.4,4.9,3.2,6.7c0.3,0.6,0.6,1.2,0.9,1.9c1.6,3.2,4.1,8.1,4.6,13.6c0.8,8.3-2.7,15.3-10,19.7
    c-5.9,3.6-17.4,5.8-34.2,6.7v0.3l-10,0c-0.2,0-0.9,0-2,0c-1.1,0-1.8,0-2,0h-10v-0.4c-16.9-0.9-28.3-3.1-34.2-6.7
    c-7.3-4.4-10.9-11.4-10-19.7c0.6-5.5,3-10.4,4.6-13.6c0.3-0.7,0.6-1.3,0.9-1.9c0.9-1.8,2-4.2,3.2-6.7l0-0.1
    c1.7-3.5,4.7-9.8,5.3-11.4c0,0,0.1-0.3,0.1-0.5c-0.1-0.1-0.3-0.3-0.5-0.5c-0.4-0.3-0.8-0.7-1.4-1.1l-0.1-0.1
    c-8.5-7.1-34.6-28.5-31.9-63.1c1.3-16.2,4.7-27.7,8.4-39.9c4-13.2,8.5-28.1,11.1-53.1l1.5-29h23.1"></path>
<path id="XMLID_3_" class="st1" d="M216.5,235.7c0.4-0.4,1-0.8,1.6-1.3c8.4-6.9,30.6-25.2,28.3-54.6c-1.2-15.2-4.3-25.6-8-37.8
    c-4.1-13.6-8.8-29.1-11.5-55.2l-1-19.3l-3.1,0.2l1,19.3l0,0.1c2.8,26.4,7.5,42,11.6,55.8c3.6,12,6.7,22.3,7.9,37.1
    c2,25.2-15.4,42-24.6,49.9v0c-39.3,28.4-76.3,0-76.3,0l0,0c-9.2-7.9-26.6-24.7-24.6-49.9c1.1-14.8,4.3-25.2,7.9-37.1
    c4.2-13.8,8.9-29.4,11.6-55.8l1-19.4l-3.1-0.2l-1,19.3c-2.7,26-7.4,41.5-11.5,55.2c-3.7,12.1-6.8,22.6-8,37.8
    c-2.3,29.4,19.9,47.7,28.3,54.6c0.6,0.5,1.1,0.9,1.6,1.3c5.5,4.7,4.1,9.4,3.5,11.5l-0.1,0.3c-0.4,1.2-3.4,7.6-5.8,12.7
    c-1.2,2.5-2.3,4.9-3.2,6.7c-0.3,0.7-0.7,1.4-1,2.1c-2.8,5.5-7.4,14.8,1.6,20.3c7.4,4.5,29.9,5.4,39,5.6v0c0.2,0,0.9,0,2,0
    c1.1,0,1.8,0,2,0v0c9.2-0.2,31.6-1.1,39-5.6c9.1-5.5,4.4-14.8,1.6-20.3c-0.4-0.7-0.7-1.5-1-2.1c-0.8-1.8-2-4.2-3.2-6.7
    c-2.4-5.1-5.5-11.4-5.8-12.7l-0.1-0.3C212.4,245.2,210.9,240.4,216.5,235.7z"></path>
<path id="XMLID_4_" class="st2" d="M236,187"></path>
<g id="XMLID_5_">
<defs>
<ellipse id="XMLID_9_" cx="180.5" cy="180.4" rx="54.5" ry="53.7"></ellipse>
</defs>
<clippath id="XMLID_8_">
<use xlink:href="#XMLID_9_" style="overflow:visible;"></use>
</clippath>
<g id="XMLID_6_" class="st3">
<path id="XMLID_31_" class="st4" d="M235.4,187.3c0,0.1,0,0.1,0,0.2C235.4,187.4,235.4,187.4,235.4,187.3z"></path>
<path id="XMLID_35_" class="st4" d="M147.4,224.3c3.5,2.5,9.9,6.5,18.6,8.8c-6.5-1.7-12.8-4.7-18.8-8.9
            C147.3,224.2,147.3,224.2,147.4,224.3z"></path>
<path id="XMLID_37_" class="st4" d="M200.2,230.7c-5.2,2-11.7,3.7-18.9,4C187.8,234.4,194,233.1,200.2,230.7z"></path>
<path id="XMLID_38_" class="st4" d="M125.9,191.1v0.3c0.5,10.3,5.5,18.8,13.8,26.5c-5.2-5.3-11.6-14.1-12.8-26.2
            C126.1,190.3,125.9,189.8,125.9,191.1z"></path>
<path id="XMLID_42_" class="st4" d="M167.3,233.4c-0.2-0.1-0.4-0.1-0.7-0.2C166.9,233.3,167.1,233.3,167.3,233.4z"></path>
<path id="XMLID_68_" class="st4" d="M180.7,234.7C180.8,234.7,180.8,234.7,180.7,234.7C180.8,234.7,180.7,234.7,180.7,234.7
            C180.7,234.7,180.7,234.7,180.7,234.7z"></path>
<path id="XMLID_78_" class="st4" d="M219.9,217.7c-0.3,0.4-0.7,0.7-1,1.1C219.2,218.4,219.6,218.1,219.9,217.7z"></path>
<path id="XMLID_79_" class="st4" d="M169.5,233.8c-0.1,0-0.2,0-0.3-0.1C169.3,233.8,169.4,233.8,169.5,233.8z"></path>
<path id="XMLID_80_" class="st4" d="M177.8,234.7C177.8,234.7,177.7,234.7,177.8,234.7C177.7,234.7,177.8,234.7,177.8,234.7z"></path>
<path id="XMLID_81_" class="st4" d="M213.8,223.5c1.7-1.5,3.2-2.9,4.6-4.3C217,220.6,215.4,222.1,213.8,223.5
            C213.7,223.5,213.8,223.5,213.8,223.5z"></path>
<path id="XMLID_82_" class="st5" d="M146.7,223.8c0.2,0.1,0.4,0.3,0.6,0.4c-2.7-2-5.3-4.1-7.5-6.2
            C143.5,221.8,146.7,223.8,146.7,223.8z"></path>
<path id="XMLID_83_" class="st5" d="M166.6,233.2c-0.2-0.1-0.4-0.1-0.6-0.2C166.2,233.1,166.4,233.2,166.6,233.2z"></path>
<path id="XMLID_85_" class="st5" d="M169.2,233.8c-0.7-0.1-1.3-0.3-1.9-0.4C167.9,233.5,168.6,233.7,169.2,233.8z"></path>
<path id="XMLID_86_" class="st5" d="M219.9,217.7c10.1-10.2,14.7-19.3,15.5-30.2C234.5,197.3,230.9,206.6,219.9,217.7z"></path>
<path id="XMLID_87_" class="st5" d="M235.4,187C235.4,187,235.4,187,235.4,187c0,0.1,0,0.2,0,0.3
            C235.4,187.2,235.4,187.1,235.4,187z"></path>
<path id="XMLID_88_" class="st5" d="M218.9,218.8c-0.2,0.2-0.3,0.3-0.5,0.5C218.6,219.1,218.7,218.9,218.9,218.8z"></path>
<path id="XMLID_89_" class="st5" d="M213.5,223.8c0.1-0.1,0.2-0.2,0.3-0.2c-4.6,3-9.1,5.4-13.5,7.1
            C207.7,227.8,212.6,224.4,213.5,223.8z"></path>
<path id="XMLID_90_" class="st5" d="M179.1,234.7c0.5,0,1,0,1.5,0c-1,0-1.9,0-2.9,0C178.2,234.7,178.7,234.7,179.1,234.7z"></path>
<path id="XMLID_91_" class="st5" d="M177.7,234.7c-2.9-0.1-5.6-0.4-8.2-0.9C172.2,234.3,175,234.6,177.7,234.7z"></path>
<path id="XMLID_92_" class="st5" d="M181.4,234.7c-0.2,0-0.4,0-0.5,0C181,234.7,181.2,234.7,181.4,234.7z"></path>
</g>
<path id="XMLID_39_" class="st6" d="M420.8,224.7c-5.2,2-11.7,3.7-18.9,4C408.4,228.4,414.6,227.1,420.8,224.7z"></path>
<path id="XMLID_40_" class="st6" d="M398.3,228.7C398.3,228.7,398.3,228.7,398.3,228.7C398.3,228.7,398.3,228.7,398.3,228.7z"></path>
<path id="XMLID_43_" class="st6" d="M401.3,228.7C401.3,228.7,401.3,228.7,401.3,228.7C401.3,228.7,401.3,228.7,401.3,228.7
        C401.2,228.7,401.3,228.7,401.3,228.7z"></path>
<path id="XMLID_46_" class="st6" d="M390.1,227.8c-0.1,0-0.2,0-0.3-0.1C389.9,227.8,390,227.8,390.1,227.8z"></path>
<path id="XMLID_48_" class="st6" d="M387.9,227.4c-0.2-0.1-0.4-0.1-0.7-0.2C387.4,227.3,387.6,227.3,387.9,227.4z"></path>
<path id="XMLID_71_" class="st7" d="M389.8,227.8c-0.7-0.1-1.3-0.3-1.9-0.4C388.5,227.5,389.1,227.7,389.8,227.8z"></path>
<path id="XMLID_72_" class="st7" d="M387.2,227.2c-0.2-0.1-0.4-0.1-0.6-0.2C386.8,227.1,387,227.2,387.2,227.2z"></path>
<path id="XMLID_74_" class="st7" d="M399.7,228.7c0.5,0,1,0,1.5,0c-1,0-1.9,0-2.9,0C398.8,228.7,399.2,228.7,399.7,228.7z"></path>
<path id="XMLID_75_" class="st7" d="M398.3,228.7c-2.9-0.1-5.6-0.4-8.2-0.9C392.8,228.3,395.5,228.6,398.3,228.7z"></path>
<path id="XMLID_76_" class="st7" d="M401.9,228.7c-0.2,0-0.4,0-0.5,0C401.5,228.7,401.7,228.7,401.9,228.7z"></path>
<g id="XMLID_2_" class="st3">
<path id="XMLID_36_" class="st4" d="M236.2,187.3c0,0.1,0,0.1,0,0.2C236.2,187.4,236.2,187.4,236.2,187.3z"></path>
<path id="XMLID_41_" class="st4" d="M148.2,224.3c3.5,2.5,9.9,6.5,18.6,8.8c-6.5-1.7-12.8-4.7-18.8-8.9
            C148.1,224.2,148.2,224.2,148.2,224.3z"></path>
<path id="XMLID_45_" class="st4" d="M220.8,217.7c-0.3,0.4-0.7,0.7-1,1.1C220.1,218.4,220.4,218.1,220.8,217.7z"></path>
<path id="XMLID_47_" class="st4" d="M214.6,223.5c1.7-1.5,3.2-2.9,4.6-4.3C217.8,220.7,216.2,222.1,214.6,223.5
            C214.6,223.5,214.6,223.5,214.6,223.5z"></path>
<path id="XMLID_67_" class="st5" d="M214.3,223.8c0.1-0.1,0.2-0.2,0.3-0.2c-4.6,3-9.1,5.4-13.5,7.1
            C208.5,227.8,213.5,224.4,214.3,223.8z"></path>
<path id="XMLID_69_" class="st5" d="M220.8,217.7c10.1-10.2,14.7-19.3,15.5-30.2C235.4,197.3,231.7,206.6,220.8,217.7z"></path>
<path id="XMLID_70_" class="st5" d="M219.7,218.8c-0.2,0.2-0.3,0.3-0.5,0.5C219.4,219.1,219.6,218.9,219.7,218.8z"></path>
<path id="XMLID_73_" class="st5" d="M236.3,187C236.3,187,236.3,187,236.3,187c0,0.1,0,0.2,0,0.3
            C236.3,187.2,236.3,187.1,236.3,187z"></path>
<path id="XMLID_77_" class="st5" d="M147.5,223.8c0.2,0.1,0.4,0.3,0.6,0.4c-2.7-2-5.3-4.1-7.5-6.2
            C144.3,221.8,147.5,223.8,147.5,223.8z"></path>
</g>
<path id="XMLID_34_" class="st8" d="M190.2,195.6c31.9,39.7,45-7.9,45.2-8.6c0.3-3.7,0.2-7.5,0-11.5c0,0-4.6-46.9-47.6-2.8
        c-3.6,3.7-7,6.9-10.2,9.8C181.8,186.1,186,190.4,190.2,195.6z"></path>
<path id="XMLID_84_" class="st9" d="M177.7,182.6c-27.2-23.1-51.5-11.7-50.9,6.6c0,0.8,0.1,1.7,0.2,2.5
        C130,197,141.5,215,177.7,182.6z"></path>
<path id="XMLID_93_" class="st10" d="M235.4,187.3c0-0.1,0-0.2,0-0.3c-0.2,0.7-13.3,48.3-45.2,8.6c-4.2-5.2-8.4-9.5-12.5-13
        c-36.2,32.4-47.6,14.4-50.7,9.1c1.2,12.2,7.6,21,12.8,26.2c2.3,2.1,4.8,4.2,7.5,6.2c6,4.2,12.3,7.2,18.8,8.9
        c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.7,0.2c0.6,0.1,1.3,0.3,1.9,0.4c0.1,0,0.2,0,0.3,0.1c2.6,0.5,5.3,0.8,8.2,0.9
        c0,0,0,0,0.1,0c0.9,0,1.9,0,2.9,0c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0,0.5,0c7.2-0.3,13.6-2,18.9-4c4.4-1.8,8.9-4.1,13.5-7.1
        c1.7-1.5,3.2-2.9,4.7-4.3c0.2-0.2,0.3-0.3,0.5-0.5c0.4-0.4,0.7-0.7,1-1.1c11-11.2,14.6-20.4,15.5-30.2
        C235.4,187.4,235.4,187.4,235.4,187.3z"></path>
</g>
<path id="XMLID_10_" class="st2" d="M179.8,187"></path>
<path id="XMLID_11_" class="st2" d="M170.1,187"></path>
</svg>
</a>
</div>

<div class="column is-5 center-flex" style="justify-content: flex-start">
<div class="columns is-gapless">
<div class="column center-flex">
<div class="search-bar is-hidden-mobile hidden-sm">
<form class="search-form" action="https://scotch.io/search" method="GET">
<input type="search" name="q" id="aa-search-input">
<button type="submit" class="aa-input-icon">
<svg viewBox="654 -372 1664 1664" width="16" height="16">
<path d="M1806,332c0-123.3-43.8-228.8-131.5-316.5C1586.8-72.2,1481.3-116,1358-116s-228.8,43.8-316.5,131.5  C953.8,103.2,910,208.7,910,332s43.8,228.8,131.5,316.5C1129.2,736.2,1234.7,780,1358,780s228.8-43.8,316.5-131.5  C1762.2,560.8,1806,455.3,1806,332z M2318,1164c0,34.7-12.7,64.7-38,90s-55.3,38-90,38c-36,0-66-12.7-90-38l-343-342  c-119.3,82.7-252.3,124-399,124c-95.3,0-186.5-18.5-273.5-55.5s-162-87-225-150s-113-138-150-225S654,427.3,654,332  s18.5-186.5,55.5-273.5s87-162,150-225s138-113,225-150S1262.7-372,1358-372s186.5,18.5,273.5,55.5s162,87,225,150s113,138,150,225  S2062,236.7,2062,332c0,146.7-41.3,279.7-124,399l343,343C2305.7,1098.7,2318,1128.7,2318,1164z"></path>
</svg> </button>
</form>
</div>
</div>

<div class="column is-narrow">
<nav class="user-nav">
<ul>
<li><a href="https://scotch.io/login" class="open-modal" data-modal-target=".login-modal">Login</a></li>
<li class="sign-up"><a href="https://scotch.io/registering">Sign Up</a></li>
</ul>
</nav>
</div>
</div>
</div>
</div>
<svg class="diagon-alley is-left" viewBox="0 0 100 100" preserveAspectRatio="none">
<polygon points="0 0, 100 0, 100 100"></polygon>
</svg>
<svg class="diagon-alley is-right" viewBox="0 0 100 100" preserveAspectRatio="none">
<polygon points="0 0, 100 0, 0 100"></polygon>
</svg>
</div>
</header>
<main id="site__main">
<a class="notification is-info p-y-sm has-text-centered" href="https://bit.ly/2t8qcjZ" style="display: block; width: 100%; font-size: 14px;">
Las Vegas! Intro to React Meetup. March 28!
</a>
<article class="article article--single authentication node-js ">
<header class="article__header
        
        
                        ">
<div align="center" id="div-gpt-ad-leaderboard-ATF" class="freestarred m-b-md"></div>
<div class="container">
<h4 class="subtitle">
</h4>
<h1>Easy Node Authentication: Setup and Local</h1>
<div class="article__meta is-hidden-desktop">
<div class="meta__box">
<a href="https://scotch.io/@chris">Chris Sevilleja</a>
<a href="https://twitter.com/chrisoncode" target="_blank">
(@chrisoncode)
</a>
</div>
<div class="meta__box">
<time>July 12, 2016</time>
</div>
<div class="meta__box tags">
<a href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=authentication" class="color-authentication">#authentication</a> <a href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=node-js" class="color-node-js">#node.js</a>
</div>
</div>
<div class="m-t-md">
<div class="columns is-variable is-1">
<div class="column is-12-touch is-9-tablet center-flex-v">
<div class="article__image">
<img src="./routes_files/node-authentication-header.jpg" class="loaded" data-was-processed="true">
<a class="author is-hidden-desktop" href="https://scotch.io/@chris">
<div class="author__face" style="background-image:url(&#39;//cdn.scotch.io/1/w7Vhk81SyClJPlDQPMLh_17795826_10154678250924582_8102840950354615336_n.jpg&#39;)"></div>
<div class="author__name">
Chris Sevilleja
</div>
</a>
<div class="stat-boxes">
<div class="stat-box is-hidden-desktop is-hidden-mobile">
👁️ 510,241 views
</div>
<div class="stat-box is-hidden-desktop is-hidden-mobile">
💬 <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#comments-section"><span class="m-l-xs comment-number" data-id="273">474</span> comments</a>
</div>
</div>
</div>
</div>
<div class="column is-3-tablet">
<div class="meta-box is-hidden-touch">
<ul>
<li>
<div class="meta-author">
<a href="https://scotch.io/@chris">
<span class="author__face is-visible-desktop" style="background-image:url(&#39;//cdn.scotch.io/1/w7Vhk81SyClJPlDQPMLh_17795826_10154678250924582_8102840950354615336_n.jpg&#39;)"></span>
</a>
<a href="https://scotch.io/@chris" class="m-b-sm is-size-5">
Chris Sevilleja
</a>
<iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-follow-button twitter-follow-button-rendered" style="position: static; visibility: visible; width: 228px; height: 20px;" title="Twitter Follow Button" src="./routes_files/follow_button.2e798283373a8137c24e277b9b9620d6.en.html" data-screen-name="chrisoncode"></iframe>
</div>
</li>
<li>
🕔 <time title="2016-07-12 19:35:49">July 12, 2016</time>
</li>
<li>
🏷️ <a href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=authentication" class="color-authentication">#authentication</a> <a href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials&amp;dFR%5B_tags%5D%5B0%5D=node-js" class="color-node-js">#node.js</a>
</li>
<li>
<a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#comments-section"><span class="comment-number meta-number" data-id="273">474</span> <span class="meta-text">comments</span></a>
</li>
<li>
<span class="meta-number">510,241</span> <span class="meta-text">views</span>
</li>
</ul>
</div></div>
</div>
</div>
</div>
</header>
<div class="actions-top">
<div class="actions">
<a href="https://github.com/scotch-io/easy-node-authentication/tree/local" class="button is-danger" target="_blank">
<span class="is-small is-hidden-mobile" style="margin-right: 2px"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511 511" style="enable-background:new 0 0 511 511;" xml:space="preserve" width="50" height="50">
<g>
<path d="M471.5,56h-432C17.72,56,0,73.72,0,95.5v320C0,437.28,17.72,455,39.5,455h432c21.78,0,39.5-17.72,39.5-39.5v-320   C511,73.72,493.28,56,471.5,56z M39.5,71h432c13.509,0,24.5,10.991,24.5,24.5V120H15V95.5C15,81.991,25.991,71,39.5,71z M471.5,440   h-432C25.991,440,15,429.009,15,415.5V135h481v280.5C496,429.009,485.009,440,471.5,440z" fill="#dbdbdb"></path>
<path d="M39.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2   c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C35.59,102.2,37.53,103,39.5,103z" fill="#dbdbdb"></path>
<path d="M63.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2   c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C59.59,102.2,61.53,103,63.5,103z" fill="#dbdbdb"></path>
<path d="M87.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2   c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C83.59,102.2,85.53,103,87.5,103z" fill="#dbdbdb"></path>
<path d="M289.774,192.353c-3.945-1.255-8.165,0.926-9.421,4.873l-56,176c-1.256,3.947,0.926,8.165,4.873,9.421   c0.756,0.241,1.522,0.355,2.276,0.355c3.179,0,6.13-2.037,7.145-5.228l56-176C295.903,197.827,293.721,193.609,289.774,192.353z" fill="#dbdbdb"></path>
<path d="M324.803,210.197c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.677,0,10.606l66.697,66.697l-66.697,66.697   c-2.929,2.929-2.929,7.677,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197l72-72   c2.929-2.929,2.929-7.677,0-10.606L324.803,210.197z" fill="#dbdbdb"></path>
<path d="M204.803,210.197c-2.929-2.929-7.678-2.929-10.606,0l-72,72c-2.929,2.929-2.929,7.677,0,10.606l72,72   c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.677,0-10.606L138.106,287.5l66.697-66.697   C207.732,217.874,207.732,213.126,204.803,210.197z" fill="#dbdbdb"></path>
<path d="M119.5,103h304c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-304c-4.142,0-7.5,3.358-7.5,7.5S115.358,103,119.5,103z" fill="#dbdbdb"></path>
<path d="M455.5,103h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S451.358,103,455.5,103z" fill="#dbdbdb"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
Code
</a>
<a href="http://node-auth.scotch.io/" class="button is-warning" target="_blank">
<span class="is-small is-hidden-mobile" style="margin-right: 2px"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve" width="50" height="50">
<g>
<g>
<path d="M244.588,188.272c-37.345,0-67.728,30.383-67.728,67.728c0,37.346,30.382,67.729,67.728,67.729    s67.729-30.383,67.729-67.729C312.316,218.655,281.933,188.272,244.588,188.272z M244.588,307.734    c-28.526,0-51.734-23.208-51.734-51.735c0-28.526,23.208-51.734,51.734-51.734c28.527,0,51.735,23.208,51.735,51.734    C296.323,284.526,273.114,307.734,244.588,307.734z" fill="#dbdbdb"></path>
</g>
</g>
<g>
<g>
<path d="M491.854,123.702c0-20.676-16.82-37.497-37.497-37.497c-9.777,0-18.687,3.764-25.37,9.915    c-24.849-7.991-59.305-6.176-98.548,4.129c-2.488-7.854-5.173-15.402-8.059-22.59C302.285,27.579,274.658,0,244.588,0    c-30.07,0-57.697,27.579-77.793,77.658c-2.893,7.209-5.586,14.779-8.08,22.658c-7.994-2.093-15.833-3.853-23.475-5.252    c-53.074-9.717-91.143-1.061-107.184,24.373c-11.791,18.695-10.366,44.211,4.056,74.082c-7.348,6.85-11.954,16.603-11.954,27.417    c0,20.676,16.82,37.497,37.497,37.497c6.146,0,11.945-1.496,17.07-4.128c0.508,0.563,1.013,1.127,1.526,1.69    c-8.897,9.77-16.945,19.585-24.009,29.345c-31.637,43.712-40.227,81.792-24.186,107.226c11.75,18.63,35.313,28.257,67.941,28.257    c11.917,0,25.044-1.285,39.244-3.884c7.641-1.399,15.48-3.159,23.475-5.252c2.494,7.879,5.187,15.448,8.08,22.658    c20.096,50.078,47.724,77.658,77.793,77.658c30.071,0,57.697-27.579,77.793-77.658c2.893-7.209,5.586-14.779,8.08-22.658    c7.995,2.093,15.834,3.854,23.476,5.252c14.201,2.599,27.325,3.884,39.244,3.884c32.623,0,56.192-9.629,67.941-28.257    c16.041-25.435,7.451-63.515-24.186-107.226c-7.055-9.749-15.094-19.552-23.979-29.312c31.497-34.542,51.46-68.798,55.355-97.53    C482.095,152.948,491.854,139.448,491.854,123.702z M331.967,185.219c-9.68-6.914-19.702-13.65-30.023-20.16    c-13.06-8.236-26.241-15.884-39.413-22.903c19.371-8.948,38.515-16.359,57.063-22.075    C325.021,140.182,329.18,162.101,331.967,185.219z M181.638,83.613c17.245-42.972,40.19-67.619,62.95-67.619    s45.705,24.647,62.95,67.619c2.686,6.693,5.191,13.721,7.519,21.029c-22.48,6.939-46.252,16.462-70.483,28.333    c-23.99-11.742-47.748-21.281-70.472-28.275C176.434,97.371,178.945,90.324,181.638,83.613z M169.594,120.04    c18.433,5.679,37.606,13.112,57.056,22.105c-13.109,6.989-26.29,14.635-39.417,22.915c-10.321,6.51-20.343,13.247-30.024,20.161    C159.997,162.085,164.162,140.154,169.594,120.04z M41.585,127.968c12.143-19.252,45.229-25.511,90.776-17.172    c7.113,1.302,14.412,2.938,21.856,4.874c-6.812,25.191-11.695,53.073-14.466,82.505c-19.31,14.881-36.958,30.413-52.465,46.172    c-0.066-0.074-0.13-0.147-0.196-0.221c5.042-6.387,8.064-14.44,8.064-23.19c0-20.677-16.82-37.497-37.497-37.497    c-4.098,0-8.039,0.67-11.732,1.889C31.673,155.214,35.509,137.6,41.585,127.968z M138.106,292.125    c-14.438-11.747-27.792-23.854-39.845-36.149c12.002-12.233,25.36-24.348,39.847-36.126c-0.684,11.876-1.036,23.946-1.036,36.149    C137.07,268.194,137.422,280.258,138.106,292.125z M57.655,242.438c-11.857,0-21.503-9.646-21.503-21.503    c0-11.858,9.646-21.503,21.503-21.503c11.857,0,21.503,9.646,21.503,21.503C79.158,232.791,69.512,242.438,57.655,242.438z     M132.36,401.205c-45.549,8.338-78.633,2.078-90.776-17.172c-12.141-19.252-3.535-51.806,23.613-89.317    c6.513-8.999,13.908-18.056,22.075-27.086c15.58,15.842,33.217,31.365,52.478,46.207c2.771,29.428,7.654,57.306,14.465,82.494    C146.772,398.267,139.473,399.903,132.36,401.205z M157.21,326.79c9.68,6.911,19.702,13.643,30.023,20.151    c13.064,8.239,26.25,15.888,39.427,22.911c-19.454,8.994-38.63,16.429-57.065,22.109C164.162,371.85,159.999,349.92,157.21,326.79    z M307.538,428.387c-17.245,42.974-40.188,67.619-62.95,67.619c-22.761,0-45.705-24.647-62.95-67.619    c-2.692-6.711-5.203-13.757-7.536-21.086c22.728-6.996,46.492-16.538,70.487-28.283c23.995,11.745,47.758,21.287,70.486,28.283    C312.742,414.629,310.231,421.676,307.538,428.387z M319.582,391.96c-18.436-5.68-37.611-13.114-57.065-22.109    c13.177-7.021,26.363-14.672,39.427-22.911c10.358-6.533,20.378-13.268,30.023-20.156    C329.178,349.918,325.015,371.849,319.582,391.96z M293.412,333.413c-16.191,10.212-32.553,19.49-48.824,27.743    c-16.27-8.252-32.633-17.531-48.824-27.743c-14.2-8.957-27.812-18.334-40.71-28.022c-1.313-16.07-1.991-32.596-1.991-49.392    c0-16.794,0.677-33.316,1.99-49.385c12.891-9.682,26.505-19.069,40.71-28.029c16.196-10.215,32.549-19.482,48.833-27.739    c16.268,8.251,32.628,17.529,48.814,27.739c14.205,8.959,27.819,18.346,40.71,28.028c1.313,16.069,1.99,32.591,1.99,49.385    c0,16.779-0.676,33.286-1.986,49.34C321.264,315.023,307.645,324.436,293.412,333.413z M423.978,294.715    c27.149,37.51,35.756,70.065,23.613,89.317s-45.229,25.51-90.776,17.172c-7.113-1.302-14.413-2.938-21.857-4.874    c6.811-25.189,11.694-53.069,14.465-82.499c19.475-15.007,37.119-30.559,52.504-46.175    C410.086,276.678,417.472,285.726,423.978,294.715z M351.069,219.85c14.484,11.776,27.841,23.888,39.841,36.12    c-11.926,12.121-25.289,24.249-39.836,36.097c0.68-11.849,1.032-23.893,1.032-36.067    C352.105,243.797,351.753,231.726,351.069,219.85z M401.9,244.354c-15.51-15.761-33.161-31.297-52.474-46.181    c-2.771-29.428-7.653-57.306-14.464-82.495c34.146-8.911,63.584-10.844,84.489-5.648c-1.667,4.239-2.593,8.849-2.593,13.674    c0,19.772,15.385,36.007,34.81,37.391C446.786,185.41,428.945,214.584,401.9,244.354z M432.853,123.702    c0-11.857,9.646-21.503,21.504-21.503c11.857,0,21.503,9.646,21.503,21.503c0,11.858-9.646,21.503-21.503,21.503    C442.498,145.205,432.853,135.559,432.853,123.702z" fill="#dbdbdb"></path>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
Demo
</a>
</div> </div>
<div class="article__inner  has-actions ">
<div class="container">
<div class="columns is-variable is-1 is-desktop 
        
        ">
<div class="article__content content column is-12-touch is-9-tablet">
<div class="content__inside">
<div class="notification">
This tutorial has been updating for ExpressJS 4.0. Read more <a href="https://scotch.io/tutorials/javascript/upgrading-our-easy-node-authentication-series-to-expressjs-4-0" class="alert-link">here</a>.
<p><strong>Edit 11/18/2017: Updated to reflect Facebook API changes. Updating dependencies in package.json</strong></p>
</div>
<p>Authentication and logins in Node can be a complicated thing. Actually logging in for any application can be a pain. This article series will deal with authenticating in your Node application using the package <a href="http://passportjs.org/" target="blank">Passport</a>.</p>
<div class="notification m-b-md">
<p>This article is part of our Easy Node Authentication series.</p><div class="table-of-contents"><h3>Table of Contents</h3><ol><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#application-structure" class="application-structure" title="Application Structure">
      Application Structure
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#packages-packagejson" class="packages-packagejson" title="Packages package.json">
      Packages package.json
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#application-setup-serverjs" class="application-setup-serverjs" title="Application Setup server.js">
      Application Setup server.js
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#database-config-configdatabasejs" class="database-config-configdatabasejs" title="Database Config config/database.js">
      Database Config config/database.js
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#routes-approutesjs" class="routes-approutesjs" title="Routes app/routes.js">
      Routes app/routes.js
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#views-viewsindexejs-viewsloginejs-viewssignupejs" class="views-viewsindexejs-viewsloginejs-viewssignupejs" title="Views views/index.ejs, views/login.ejs, views/signup.ejs">
      Views views/index.ejs, views/login.ejs, views/signup.ejs
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#user-model" class="user-model" title="User Model">
      User Model
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#handling-signupregistration" class="handling-signupregistration" title="Handling Signup/Registration">
      Handling Signup/Registration
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#login" class="login" title="Login">
      Login
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#displaying-user-and-secure-profile-page-viewsprofileejs" class="displaying-user-and-secure-profile-page-viewsprofileejs" title="Displaying User and Secure Profile Page views/profile.ejs">
      Displaying User and Secure Profile Page views/profile.ejs
    </a>
  </li><li>
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#conclusion" class="conclusion" title="Conclusion">
      Conclusion
    </a>
  </li></ol></div>
<ul>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local" class="alert-link">Getting Started and Local Authentication</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-facebook" class="alert-link">Facebook</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-twitter" class="alert-link">Twitter</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-google" class="alert-link">Google</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-linking-all-accounts-together" class="alert-link">Linking All Accounts Together</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/upgrading-our-easy-node-authentication-series-to-expressjs-4-0" class="alert-link">Upgrading for ExpressJS 4.0</a>
</li>
</ul>
</div>
<h3>What we'll be building:</h3>
<p>We will build an application that will have:</p>
<ul>
<li><strong>Local account logins</strong> and signups (using <a href="https://github.com/jaredhanson/passport-local" target="_blank">passport-local</a>)</li>
<li><strong>Facebook logins</strong> and registration (using <a href="https://github.com/jaredhanson/passport-facebook" target="_blank">passport-facebook</a>)</li>
<li><strong>Twitter logins</strong> and registration (using <a href="https://github.com/jaredhanson/passport-twitter" target="_blank">passport-twitter</a>)</li>
<li><strong>Google+ logins</strong> and registration (using oauth with <a href="https://github.com/jaredhanson/passport-google-oauth" target="_blank">passport-google-oauth</a>)</li>
<li>Require login for certain routes/sections of your application</li>
<li>Creating a password hash for local accounts (using <a href="https://github.com/shaneGirish/bcrypt-nodejs" target="_blank">bcrypt-nodejs</a>)</li>
<li>Displaying error messages (using flash with <a href="https://github.com/jaredhanson/connect-flash" target="_blank">connect-flash</a>. required since express 3.x)</li>
<li>Linking all social accounts under one user account</li>
<li>Allowing a user to unlink a specific social account</li>
</ul>
<h3>The Tutorial Series</h3>
<p>We'll release this entire gigantic series over 5 different tutorials. They are:</p>
<ol>
<li>Getting Set up and Local Authentication</li>
<li>Facebook Authentication</li>
<li>Twitter Authentication</li>
<li>Google Authentication</li>
<li>Linking all accounts together</li>
</ol>
<p>Enough chit chat. Let's dive right into a completely blank Node application and build our entire application from scratch.</p>
<p>Here's what we'll be building:</p>
<p><a href="./routes_files/node-authentication.jpg"><img data-src="https://cask.scotch.io/2013/12/node-authentication.jpg" alt="node-authentication" width="1188" height="355" class="alignnone size-full wp-image-725 img-responsive img-thumbnail loaded" src="./routes_files/node-authentication.jpg" data-was-processed="true"></a> And after a user has logged in with all their credentials:</p>
<p><a href="./routes_files/node-authentication-profile1.jpg"><img data-src="https://cask.scotch.io/2013/12/node-authentication-profile1.jpg" alt="node-authentication-profile" width="1181" height="711" class="alignnone size-full wp-image-728 img-thumbnail img-responsive loaded" src="./routes_files/node-authentication-profile1.jpg" data-was-processed="true"></a> For this article, we'll be focusing on setup and only local logins and registrations/signups. Since this is the first article and also deals with setting up our application, it will probably be one of the longer ones if not the longest. Sit tight for the duration of your flight.</p>
<h3>Setting Up Our Application</h3>
<p>To set up our base Node application, we'll need a few things. We'll set up our <strong>npm packages</strong>, <strong>node application</strong>, <strong>configuration files</strong>, <strong>models</strong>, and <strong>routes</strong>.</p><div class="notification m-b-md">Related Course: <a href="https://bit.ly/2rVqDcs">Getting Started with JavaScript for Web Development</a></div>
<h2 id="application-structure">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-application-structure">
      <span class="icon is-large">#</span>
      Application Structure
    </a> 
  </h2>
<pre data-title="markup" class=" language-markup"><code class=" language-markup">
    - app
    ------ models
    ---------- user.js  <span class="token comment">&lt;!-- our user model --&gt;</span>
    ------ routes.js    <span class="token comment">&lt;!-- all the routes for our application --&gt;</span>
    - config
    ------ auth.js      <span class="token comment">&lt;!-- will hold all our client secret keys (facebook, twitter, google) --&gt;</span>
    ------ database.js  <span class="token comment">&lt;!-- will hold our database connection settings --&gt;</span>
    ------ passport.js  <span class="token comment">&lt;!-- configuring the strategies for passport --&gt;</span>
    - views
    ------ index.ejs    <span class="token comment">&lt;!-- show our home page with login links --&gt;</span>
    ------ login.ejs    <span class="token comment">&lt;!-- show our login form --&gt;</span>
    ------ signup.ejs   <span class="token comment">&lt;!-- show our signup form --&gt;</span>
    ------ profile.ejs  <span class="token comment">&lt;!-- after a user logs in, they will see their profile --&gt;</span>
    - package.json      <span class="token comment">&lt;!-- handle our npm packages --&gt;</span>
    - server.js         <span class="token comment">&lt;!-- setup our application --&gt;</span>
</code>
</pre>
<p>Go ahead and create all those files and folders and we'll fill them in as we go along.</p>
<h2 id="packages-packagejson">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-packages-packagejson">
      <span class="icon is-large">#</span>
      Packages package.json
    </a> 
  </h2>
<p>We are going to install all the packages needed for the entire tutorial series. This means we'll install all the packages needed for passport local, facebook, twitter, google, and the other things we need. It's all commented out so you know what each does.</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// package.json</span>

<span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"node-authentication"</span><span class="token punctuation">,</span>
  <span class="token string">"main"</span><span class="token punctuation">:</span> <span class="token string">"server.js"</span><span class="token punctuation">,</span>
  <span class="token string">"dependencies"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"express"</span> <span class="token punctuation">:</span> <span class="token string">"~4.14.0"</span><span class="token punctuation">,</span>           
    <span class="token string">"ejs"</span> <span class="token punctuation">:</span> <span class="token string">"~2.5.2"</span><span class="token punctuation">,</span>               
    <span class="token string">"mongoose"</span> <span class="token punctuation">:</span> <span class="token string">"~4.13.1"</span><span class="token punctuation">,</span>          
    <span class="token string">"passport"</span> <span class="token punctuation">:</span> <span class="token string">"~0.3.2"</span><span class="token punctuation">,</span>         
    <span class="token string">"passport-local"</span> <span class="token punctuation">:</span> <span class="token string">"~1.0.0"</span><span class="token punctuation">,</span>    
    <span class="token string">"passport-facebook"</span> <span class="token punctuation">:</span> <span class="token string">"~2.1.1"</span><span class="token punctuation">,</span> 
    <span class="token string">"passport-twitter"</span> <span class="token punctuation">:</span> <span class="token string">"~1.0.4"</span><span class="token punctuation">,</span>  
    <span class="token string">"passport-google-oauth"</span> <span class="token punctuation">:</span> <span class="token string">"~1.0.0"</span><span class="token punctuation">,</span>
    <span class="token string">"connect-flash"</span> <span class="token punctuation">:</span> <span class="token string">"~0.1.1"</span><span class="token punctuation">,</span>     
    <span class="token string">"bcrypt-nodejs"</span> <span class="token punctuation">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>

    <span class="token string">"morgan"</span><span class="token punctuation">:</span> <span class="token string">"~1.7.0"</span><span class="token punctuation">,</span>
    <span class="token string">"body-parser"</span><span class="token punctuation">:</span> <span class="token string">"~1.15.2"</span><span class="token punctuation">,</span>
    <span class="token string">"cookie-parser"</span><span class="token punctuation">:</span> <span class="token string">"~1.4.3"</span><span class="token punctuation">,</span>
    <span class="token string">"method-override"</span><span class="token punctuation">:</span> <span class="token string">"~2.3.6"</span><span class="token punctuation">,</span>
    <span class="token string">"express-session"</span><span class="token punctuation">:</span> <span class="token string">"~1.14.1"</span>   
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code>
</pre>
<p>Most of these are pretty self-explanatory.</p>
<ul>
<li><em>Express</em> is the framework. </li>
<li><em>Ejs</em> is the templating engine. </li>
<li><em>Mongoose</em> is object modeling for our MongoDB database. </li>
<li><em>Passport</em> stuff will help us authenticating with different methods. </li>
<li><em>Connect-flash</em> allows for passing session flashdata messages. </li>
<li><em>Bcrypt-nodejs</em> gives us the ability to hash the password. </li>
</ul>
<p>I use bcrypt-nodejs instead of bcrypt since it is easier to set up in windows. For more information on the newer ExpressJS 4.0 dependencies (morgan, body-parser, cookie-parser, method-override, express-session), see this article on</p>
<p><a href="https://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0#removed-bundled-middleware">ExpressJS 4.0</a>. Now that we have all of our dependencies ready to go, let's go ahead and install them:</p>
<p><code>npm install</code> With all of our packages ready to go, let's set up our application in <code>server.js</code>.</p>
<h2 id="application-setup-serverjs">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-application-setup-serverjs">
      <span class="icon is-large">#</span>
      Application Setup server.js
    </a> 
  </h2>
<p>Let's make all our packages work together nicely. Our goal is to set up this file and try to have it bootstrap our entire application. We'd like to not go back into this file if it can be helped. This file will be the glue for our entire application.</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// server.js</span>

<span class="token comment">// set up ======================================================================</span>
<span class="token comment">// get all the tools we need</span>
<span class="token keyword">var</span> express  <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> app      <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> port     <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>PORT <span class="token operator">||</span> <span class="token number">8080</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongoose'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> passport <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'passport'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> flash    <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'connect-flash'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> morgan       <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'morgan'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> cookieParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cookie-parser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bodyParser   <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'body-parser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> session      <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express-session'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> configDB <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./config/database.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// configuration ===============================================================</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>configDB<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// connect to our database</span>

<span class="token comment">// require('./config/passport')(passport); // pass passport for configuration</span>

<span class="token comment">// set up our express application</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">morgan</span><span class="token punctuation">(</span><span class="token string">'dev'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// log every request to the console</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// read cookies (needed for auth)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">bodyParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// get information from html forms</span>

app<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string">'view engine'</span><span class="token punctuation">,</span> <span class="token string">'ejs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set up ejs for templating</span>

<span class="token comment">// required for passport</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span> secret<span class="token punctuation">:</span> <span class="token string">'ilovescotchscotchyscotchscotch'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// session secret</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>passport<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>passport<span class="token punctuation">.</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// persistent login sessions</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">flash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// use connect-flash for flash messages stored in session</span>

<span class="token comment">// routes ======================================================================</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./app/routes.js'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> passport<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// load our routes and pass in our app and fully configured passport</span>

<span class="token comment">// launch ======================================================================</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The magic happens on port '</span> <span class="token operator">+</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>
</pre>
<p>We are going to comment out our passport configuration for now. We'll uncomment it after we create that <code>config/passport.js</code> file.</p>
<p>The path of our <strong>passport</strong> object is important to note here. We will create it at the very beginning of the file with <code>var passport = require('passport');</code>. Then we pass it into our <code>config/passport.js</code> file for it to be configured. Then we pass it to the <code>app/routes.js</code> file for it to be used in our routes.</p>
<p>Now with this file, we have our application listening on <strong>port 8080</strong>. All we have to do to start up our server is:</p>
<p><code>node server.js</code> Then when we visit <strong>http://localhost:8080</strong> we will see our application. (Not really right this moment since we have some more set up to do)</p>
<div class="alert alert-info">
<i class="icon-bolt"></i> <strong>Auto Refreshing:</strong> By default, node doesn't automatically refresh our server every time we change files. To do that we'll use <a href="https://github.com/remy/nodemon" class="alert-link" target="_blank">nodemon</a>. Just install with: <code>npm install -g nodemon</code> and use with: <code>nodemon server.js</code>.
</div>
<p>Now this won't do much for our application since we don't have our <strong>database configuration</strong>, <strong>routes</strong>, <strong>user model</strong>, or <strong>passport configuration</strong> set up. Let's do the database and routes now.</p>
<h2 id="database-config-configdatabasejs">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-database-config-configdatabasejs">
      <span class="icon is-large">#</span>
      Database Config config/database.js
    </a> 
  </h2>
<p>We already are calling this file in <code>server.js</code>. Now we just have to set it up.</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// config/database.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token string">'url'</span> <span class="token punctuation">:</span> <span class="token string">'your-settings-here'</span> <span class="token comment">// looks like mongodb://&lt;user&gt;:&lt;pass&gt;@mongo.onmodulus.net:27017/Mikha4ot</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code>
</pre>
<p>Fill this in with your own database. If you don't have a MongoDB database lying around, I would suggest going to <a href="https://modulus.io/" target="_blank">Modulus.io</a> and grabbing one. Once you sign up (and you get a $15 credit for signing up), you can create your database, grab its <strong>connection url</strong>, and place it in this file.</p>
<p>You can also install MongoDB locally and use a local database. You can find instructions here: <a href="https://scotch.io/tutorials/an-introduction-to-mongodb">An Introduction to MongoDB</a>.</p>
<h2 id="routes-approutesjs">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-routes-approutesjs">
      <span class="icon is-large">#</span>
      Routes app/routes.js
    </a> 
  </h2>
<p>We will keep our routes simple for now. We will have the following routes:</p>
<ul>
<li>Home Page (/)</li>
<li>Login Page (/login)</li>
<li>Signup Page (/signup)</li>
<li>Handle the POST for both login</li>
<li>Handle the POST for both signup</li>
<li>Profile Page (after logged in)</li>
</ul>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// app/routes.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> passport<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// =====================================</span>
    <span class="token comment">// HOME PAGE (with login links) ========</span>
    <span class="token comment">// =====================================</span>
    app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'index.ejs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// load the index.ejs file</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// =====================================</span>
    <span class="token comment">// LOGIN ===============================</span>
    <span class="token comment">// =====================================</span>
    <span class="token comment">// show the login form</span>
    app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// render the page and pass in any flash data if it exists</span>
        res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'login.ejs'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> req<span class="token punctuation">.</span><span class="token function">flash</span><span class="token punctuation">(</span><span class="token string">'loginMessage'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// process the login form</span>
    <span class="token comment">// app.post('/login', do all our passport stuff here);</span>

    <span class="token comment">// =====================================</span>
    <span class="token comment">// SIGNUP ==============================</span>
    <span class="token comment">// =====================================</span>
    <span class="token comment">// show the signup form</span>
    app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">'/signup'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// render the page and pass in any flash data if it exists</span>
        res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'signup.ejs'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> req<span class="token punctuation">.</span><span class="token function">flash</span><span class="token punctuation">(</span><span class="token string">'signupMessage'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// process the signup form</span>
    <span class="token comment">// app.post('/signup', do all our passport stuff here);</span>

    <span class="token comment">// =====================================</span>
    <span class="token comment">// PROFILE SECTION =====================</span>
    <span class="token comment">// =====================================</span>
    <span class="token comment">// we will want this protected so you have to be logged in to visit</span>
    <span class="token comment">// we will use route middleware to verify this (the isLoggedIn function)</span>
    app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">'/profile'</span><span class="token punctuation">,</span> isLoggedIn<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'profile.ejs'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            user <span class="token punctuation">:</span> req<span class="token punctuation">.</span>user <span class="token comment">// get the user out of session and pass to template</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// =====================================</span>
    <span class="token comment">// LOGOUT ==============================</span>
    <span class="token comment">// =====================================</span>
    app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">'/logout'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        req<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// route middleware to make sure a user is logged in</span>
<span class="token keyword">function</span> <span class="token function">isLoggedIn</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// if user is authenticated in the session, carry on </span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// if they aren't redirect them to the home page</span>
    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code>
</pre>
<p><strong>app.post</strong>: For now, we will comment out the routes for handling the form POST. We do this since passport isn't set up yet.</p>
<p><strong>req.flash</strong>: This is the connect-flash way of getting flashdata in the session. We will create the <code>loginMessage</code> inside our passport configuration.</p>
<p><strong>isLoggedIn</strong>: Using <strong>route middleware</strong>, we can protect the profile section route. A user has to be logged in to access that route. Using the <code>isLoggedIn</code> function, we will kick a user back to the home page if they try to access <code>http://localhost:8080/profile</code> and they are <strong>not logged in</strong>.</p>
<p><strong>Logout</strong>: We will handle logout by using <code>req.logout()</code> provided by passport. After logging out, redirect the user to the home page.</p>
<p>With our server running, we can visit our application in our browser at <strong>http://localhost:8080</strong>. Once again, we won't see much since we haven't made our <strong>views</strong>. Let's go do that now. (We're almost to the authentication stuff, I promise).</p>
<h2 id="views-viewsindexejs-viewsloginejs-viewssignupejs">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-views-viewsindexejs-viewsloginejs-viewssignupejs">
      <span class="icon is-large">#</span>
      Views views/index.ejs, views/login.ejs, views/signup.ejs
    </a> 
  </h2>
<p>Here we'll define our views for our <strong>home page</strong>, <strong>login page</strong>, and <strong>signup/registration page</strong>.</p>
<h3>Home Page <small>views/index.ejs</small></h3>
<p>Our home page will just show links to all our forms of authentication.</p>
<pre data-title="markup" class=" language-markup"><code class=" language-markup"><span class="token comment">&lt;!-- views/index.ejs --&gt;</span>
<span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Node Authentication<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- load bootstrap css --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- load fontawesome --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
        body        { padding-top:80px; }
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jumbotron text-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fa fa-lock<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> Node Authentication<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Login or Register with:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/login<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-default<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fa fa-user<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> Local Login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/signup<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-default<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fa fa-user<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> Local Signup<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code>
</pre>
<p>Now if we visit our app in our browser, we'll have a site that looks like this:</p>
<p><a href="https://cask.scotch.io/2013/12/node-authentication-local.jpg"><img data-src="https://cask.scotch.io/2013/12/node-authentication-local.jpg" alt="node-authentication-local" width="1187" height="316" class="alignnone size-full wp-image-731 img-thumbnail img-responsive"></a> Here are the views for our login and signup pages also.</p>
<h3>Login Form <small>views/login.ejs</small></h3>
<pre data-title="markup" class=" language-markup"><code class=" language-markup"><span class="token comment">&lt;!-- views/login.ejs --&gt;</span>
<span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Node Authentication<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- load bootstrap css --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- load fontawesome --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
        body        { padding-top:80px; }
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-sm-6 col-sm-offset-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fa fa-sign-in<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> Login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- show any messages that come back with authentication --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>%</span> <span class="token attr-name">if</span> <span class="token attr-name">(message.length</span> <span class="token punctuation">&gt;</span></span> 0) { %&gt;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert alert-danger<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>&lt;%= message %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>%</span> <span class="token attr-name">}</span> <span class="token attr-name">%</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- LOGIN FORM --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/login<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-warning btn-lg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Need an account? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/signup<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Signup<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Or go <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code>
</pre>
<p><a href="https://cask.scotch.io/2013/12/node-auth-local-login.jpg"><img data-src="https://cask.scotch.io/2013/12/node-auth-local-login.jpg" alt="node-auth-local-login" width="600" height="400" class="alignnone size-full wp-image-732 img-thumbnail img-responsive"></a></p>
<h3>Signup Form <small>views/signup.ejs</small></h3>
<pre data-title="markup" class=" language-markup"><code class=" language-markup"><span class="token comment">&lt;!-- views/signup.ejs --&gt;</span>
<span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Node Authentication<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- load bootstrap css --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- load fontawesome --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
        body        { padding-top:80px; }
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-sm-6 col-sm-offset-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fa fa-sign-in<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> Signup<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- show any messages that come back with authentication --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>%</span> <span class="token attr-name">if</span> <span class="token attr-name">(message.length</span> <span class="token punctuation">&gt;</span></span> 0) { %&gt;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert alert-danger<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>&lt;%= message %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>%</span> <span class="token attr-name">}</span> <span class="token attr-name">%</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- LOGIN FORM --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/signup<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-warning btn-lg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Signup<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Already have an account? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/login<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Or go <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code>
</pre>
<p><a href="https://cask.scotch.io/2013/12/node-auth-local-signup.jpg"><img data-src="https://cask.scotch.io/2013/12/node-auth-local-signup.jpg" alt="node-auth-local-signup" width="600" height="400" class="alignnone size-full wp-image-733 img-thumbnail img-responsive"></a></p>
<h3>Authenticating With Passport Locally</h3>
<p>Finally! We have finally set up our application and have gotten to the authentication part. Don't worry. The rest of the authentication articles in this tutorial series will use the same base so we won't have to set up our application again.</p>
<p>So far we have <strong>installed our packages</strong>, <strong>set up our application</strong>, <strong>connected to our database</strong>, <strong>created our routes</strong>, and <strong>created our views</strong>.</p>
<p>Now we will create our <strong>user model</strong>, <strong>configure passport for local authentication</strong>, and use our configured passport to <strong>process our login/signup forms</strong>.</p>
<h2 id="user-model">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-user-model">
      <span class="icon is-large">#</span>
      User Model
    </a> 
  </h2>
<p>We will create our user model for the entire tutorial series. Our user will have the ability to be linked to multiple social accounts and to a local account. For local accounts, we will be keeping <strong>email</strong> and <strong>password</strong>. For the social accounts, we will be keeping their <strong>id</strong>, <strong>token</strong>, and some user information.</p>
<p>You can change these fields out to be whatever you want. You can authenticate locally using username and password (passport-local actually uses username by default but we'll change that to email).</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// app/models/user.js</span>
<span class="token comment">// load the things we need</span>
<span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongoose'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bcrypt   <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'bcrypt-nodejs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// define the schema for our user model</span>
<span class="token keyword">var</span> userSchema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

    local            <span class="token punctuation">:</span> <span class="token punctuation">{</span>
        email        <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        password     <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    facebook         <span class="token punctuation">:</span> <span class="token punctuation">{</span>
        id           <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        token        <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        name         <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        email        <span class="token punctuation">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    twitter          <span class="token punctuation">:</span> <span class="token punctuation">{</span>
        id           <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        token        <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        displayName  <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        username     <span class="token punctuation">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    google           <span class="token punctuation">:</span> <span class="token punctuation">{</span>
        id           <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        token        <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        email        <span class="token punctuation">:</span> String<span class="token punctuation">,</span>
        name         <span class="token punctuation">:</span> String
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// methods ======================</span>
<span class="token comment">// generating a hash</span>
userSchema<span class="token punctuation">.</span>methods<span class="token punctuation">.</span><span class="token function-variable function">generateHash</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> bcrypt<span class="token punctuation">.</span><span class="token function">hashSync</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> bcrypt<span class="token punctuation">.</span><span class="token function">genSaltSync</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// checking if password is valid</span>
userSchema<span class="token punctuation">.</span>methods<span class="token punctuation">.</span><span class="token function-variable function">validPassword</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> bcrypt<span class="token punctuation">.</span><span class="token function">compareSync</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>local<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// create the model for users and expose it to our app</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">'User'</span><span class="token punctuation">,</span> userSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>
</pre>
<p>Our model is done. We will be hashing our password within our user model before it saves to the database. This means we don't have to deal with generating the hash ourselves. It is all handled nicely and neatly inside our user model.</p>
<p>Let's move onto the important stuff of this article: <strong>authenticating locally</strong>!</p>
<h3>Configuring Passport for Local Accounts</h3>
<p>All the configuration for passport will be handled in <code>config/passport.js</code>. We want to keep this code in its own file away from our other main files like routes or the server file. I have seen some implementations where passport will be configured in random places. I believe having it in this config file will keep your overall application clean and concise.</p>
<p>So far, we created our passport object in <code>server.js</code>, and then we pass it to our <code>config/passport.js</code> file. This is where we configure our <strong>Strategy</strong> for local, facebook, twitter, and google. This is also the file where we will create the <code>serializeUser</code> and <code>deserializeUser</code> functions to store our user in session.</p>
<p>I would highly recommend going to read the <a href="http://passportjs.org/guide/" target="_blank">passport docs</a> to understand more about how the package works.</p>
<h2 id="handling-signupregistration">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-handling-signupregistration">
      <span class="icon is-large">#</span>
      Handling Signup/Registration
    </a> 
  </h2>
<p>We will be handling login and signup in <code>config/passport.js</code>. Let's look at signup first.</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// config/passport.js</span>

<span class="token comment">// load all the things we need</span>
<span class="token keyword">var</span> LocalStrategy   <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'passport-local'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Strategy<span class="token punctuation">;</span>

<span class="token comment">// load up the user model</span>
<span class="token keyword">var</span> User            <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../app/models/user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// expose this function to our app using module.exports</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>passport<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// =========================================================================</span>
    <span class="token comment">// passport session setup ==================================================</span>
    <span class="token comment">// =========================================================================</span>
    <span class="token comment">// required for persistent login sessions</span>
    <span class="token comment">// passport needs ability to serialize and unserialize users out of session</span>

    <span class="token comment">// used to serialize the user for the session</span>
    passport<span class="token punctuation">.</span><span class="token function">serializeUser</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// used to deserialize the user</span>
    passport<span class="token punctuation">.</span><span class="token function">deserializeUser</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        User<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">done</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// =========================================================================</span>
    <span class="token comment">// LOCAL SIGNUP ============================================================</span>
    <span class="token comment">// =========================================================================</span>
    <span class="token comment">// we are using named strategies since we have one for login and one for signup</span>
    <span class="token comment">// by default, if there was no name, it would just be called 'local'</span>

    passport<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'local-signup'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">LocalStrategy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// by default, local strategy uses username and password, we will override with email</span>
        usernameField <span class="token punctuation">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
        passwordField <span class="token punctuation">:</span> <span class="token string">'password'</span><span class="token punctuation">,</span>
        passReqToCallback <span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token comment">// allows us to pass back the entire request to the callback</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> email<span class="token punctuation">,</span> password<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// asynchronous</span>
        <span class="token comment">// User.findOne wont fire unless data is sent back</span>
        process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// find a user whose email is the same as the forms email</span>
        <span class="token comment">// we are checking to see if the user trying to login already exists</span>
        User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">'local.email'</span> <span class="token punctuation">:</span>  email <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// if there are any errors, return the error</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// check to see if theres already a user with that email</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">flash</span><span class="token punctuation">(</span><span class="token string">'signupMessage'</span><span class="token punctuation">,</span> <span class="token string">'That email is already taken.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

                <span class="token comment">// if there is no user with that email</span>
                <span class="token comment">// create the user</span>
                <span class="token keyword">var</span> newUser            <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// set the user's local credentials</span>
                newUser<span class="token punctuation">.</span>local<span class="token punctuation">.</span>email    <span class="token operator">=</span> email<span class="token punctuation">;</span>
                newUser<span class="token punctuation">.</span>local<span class="token punctuation">.</span>password <span class="token operator">=</span> newUser<span class="token punctuation">.</span><span class="token function">generateHash</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// save the user</span>
                newUser<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                        <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code>
</pre>
<p>We have now provided a strategy to passport called <strong>local-signup</strong>. We will use this strategy to process our signup form. Let's open up our <code>app/routes.js</code> and handle the POST for our signup form.</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// app/routes.js</span>
<span class="token operator">...</span>

    <span class="token comment">// process the signup form</span>
    app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/signup'</span><span class="token punctuation">,</span> passport<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token string">'local-signup'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        successRedirect <span class="token punctuation">:</span> <span class="token string">'/profile'</span><span class="token punctuation">,</span> <span class="token comment">// redirect to the secure profile section</span>
        failureRedirect <span class="token punctuation">:</span> <span class="token string">'/signup'</span><span class="token punctuation">,</span> <span class="token comment">// redirect back to the signup page if there is an error</span>
        failureFlash <span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token comment">// allow flash messages</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code>
</pre>
<p>That's all the code we need for the route. All of the heavy duty stuff lives inside of <code>config/passport.js</code>. All we have to set here is where our failures and successes get redirected. Super clean.</p>
<p>There is also much more you can do with this. Instead of specifying a <code>successRedirect</code>, you could use a callback and take more control over how your application works. Here is a great <a href="https://stackoverflow.com/questions/15711127/express-passport-node-js-error-handling" target="_blank">stackoverflow answer</a> on error handling. It explains how to use <code>done()</code> and how to be more specific with your handling of a route.</p>
<h3>Testing Signup</h3>
<p>With our passport config finally laid out, we can uncomment that line in our <code>server.js</code>. This will load our config and then we can use our signup form.</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// server.js</span>
<span class="token operator">...</span>

    <span class="token comment">// uncomment this line</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./config/passport'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>passport<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// pass passport for configuration</span>

<span class="token operator">...</span>
</code>
</pre>
<p>Now that we have passport, our routes, and our redirects in place, let's go ahead and test our signup form. In your browser, go to <strong>http://localhost:8080/signup</strong> and fill out your form.</p>
<p>If all goes according to plan, you should be <strong>logged in</strong>, your user <strong>saved in the session</strong>, and you are <strong>redirected to the /profile page</strong> (the profile page will show nothing right now since we haven't defined that view).</p>
<p>If we look in our database, we'll also see our user sitting there cozily with all the credentials we created for him.</p>
<p><a href="https://cask.scotch.io/2013/12/node-user-in-database.jpg"><img data-src="https://cask.scotch.io/2013/12/node-user-in-database.jpg" alt="node-user-in-database" width="738" height="146" class="alignnone size-full wp-image-740 img-responsive img-thumbnail"></a></p>
<div class="alert alert-info">
<i class="icon-bolt"></i> <strong>Exploring Your Database</strong>: I use <a href="http://robomongo.org/" class="alert-link" target="_blank">Robomongo</a> to see what's in my database. Just download it and connect to your database to see your new users after they signup!
</div>
<p>With users able to sign up, let's give them a way to login.</p>
<h2 id="login">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-login">
      <span class="icon is-large">#</span>
      Login
    </a> 
  </h2>
<p>This will be very similar to the signup strategy. We'll add the strategy to our <code>config/passport.js</code> and the route in <code>app/routes.js</code>.</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// config/passport.js</span>

<span class="token operator">...</span>

    <span class="token comment">// =========================================================================</span>
    <span class="token comment">// LOCAL LOGIN =============================================================</span>
    <span class="token comment">// =========================================================================</span>
    <span class="token comment">// we are using named strategies since we have one for login and one for signup</span>
    <span class="token comment">// by default, if there was no name, it would just be called 'local'</span>

    passport<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'local-login'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">LocalStrategy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// by default, local strategy uses username and password, we will override with email</span>
        usernameField <span class="token punctuation">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
        passwordField <span class="token punctuation">:</span> <span class="token string">'password'</span><span class="token punctuation">,</span>
        passReqToCallback <span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token comment">// allows us to pass back the entire request to the callback</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> email<span class="token punctuation">,</span> password<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// callback with email and password from our form</span>

        <span class="token comment">// find a user whose email is the same as the forms email</span>
        <span class="token comment">// we are checking to see if the user trying to login already exists</span>
        User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">'local.email'</span> <span class="token punctuation">:</span>  email <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// if there are any errors, return the error before anything else</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// if no user is found, return the message</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">flash</span><span class="token punctuation">(</span><span class="token string">'loginMessage'</span><span class="token punctuation">,</span> <span class="token string">'No user found.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// req.flash is the way to set flashdata using connect-flash</span>

            <span class="token comment">// if the user is found but the password is wrong</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">.</span><span class="token function">validPassword</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">flash</span><span class="token punctuation">(</span><span class="token string">'loginMessage'</span><span class="token punctuation">,</span> <span class="token string">'Oops! Wrong password.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// create the loginMessage and save it to session as flashdata</span>

            <span class="token comment">// all is well, return successful user</span>
            <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code>
</pre>
<p>We have now provided a strategy to passport called <strong>local-login</strong>. We will use this strategy to process our login form. We can check if a user exists, if the password is wrong, and set flash data to show error messages. Let's open up our <code>app/routes.js</code> and handle the POST for our login form.</p>
<pre data-title="javascript" class=" language-javascript"><code class=" language-javascript"><span class="token comment">// app/routes.js</span>
<span class="token operator">...</span>

    <span class="token comment">// process the login form</span>
    app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">,</span> passport<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token string">'local-login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        successRedirect <span class="token punctuation">:</span> <span class="token string">'/profile'</span><span class="token punctuation">,</span> <span class="token comment">// redirect to the secure profile section</span>
        failureRedirect <span class="token punctuation">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token comment">// redirect back to the signup page if there is an error</span>
        failureFlash <span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token comment">// allow flash messages</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code>
</pre>
<p>If you try to login with a user email that doesn't exist in our database, you will see the error. Same goes for if your password is wrong.</p>
<p><a href="https://cask.scotch.io/2013/12/node-auth-login-error.jpg"><img data-src="https://cask.scotch.io/2013/12/node-auth-login-error.jpg" alt="node-auth-login-error" width="618" height="469" class="alignnone size-full wp-image-742 img-thumbnail img-responsive"></a></p>
<h2 id="displaying-user-and-secure-profile-page-viewsprofileejs">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-displaying-user-and-secure-profile-page-viewsprofileejs">
      <span class="icon is-large">#</span>
      Displaying User and Secure Profile Page views/profile.ejs
    </a> 
  </h2>
<p>Now we have functional signup and login forms. If a user is successful in authenticating they will be redirected to the profile page. If they are not successful, they will go home. The last thing we need to do is make our profile page so that those that are lucky enough to signup (all of us?) will have an exclusive place of our site all to themselves.</p>
<pre data-title="markup" class=" language-markup"><code class=" language-markup"><span class="token comment">&lt;!-- views/profile.ejs --&gt;</span>
<span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Node Authentication<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
        body        { padding-top:80px; word-wrap:break-word; }
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page-header text-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fa fa-anchor<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> Profile Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/logout<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-default btn-sm<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Logout<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- LOCAL INFORMATION --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-sm-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>well<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fa fa-user<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> Local<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>id<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>: &lt;%= user._id %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>: &lt;%= user.local.email %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>: &lt;%= user.local.password %&gt;
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code>
</pre>
<p>After a user logs in, they can see all their information. It is grabbed from the session and passed to our view in the <code>app/routes.js</code> file. We will also provide a link to logout.</p>
<p><a href="https://cask.scotch.io/2013/12/node-auth-local-profile-page.jpg"><img data-src="https://cask.scotch.io/2013/12/node-auth-local-profile-page.jpg" alt="node-auth-local-profile-page" width="1178" height="409" class="alignnone size-full wp-image-744 img-responsive img-thumbnail"></a></p>
<h2 id="conclusion">
    <a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-conclusion">
      <span class="icon is-large">#</span>
      Conclusion
    </a> 
  </h2>
<p>There you have it! We've built a brand new application from scratch and have the ability to let users signup/register and login. We even have support for flash messages, hashing passwords, and requiring login for some sections of our site using route middleware.</p>
<p>Coming up next we'll be looking at how to take this same structure, and use passport to authenticate with Facebook, Twitter, and Google. After that we'll look at how we can get all these thing working together in the same application. Users will be able to login with one type of account, and then link their other accounts.</p>
<p>As always, if you see any ways to improve this or need any clarification, sound off in the comments and we'll respond pretty close to immediately... pretty close.</p>
<div class="alert alert-info">
<strong>Edit #1</strong>: Changed password hashing to be handled inside user model and asynchronously. <strong>Edit #2</strong>: Changed password hashing to be explicitly called. Helps with future tutorials.
</div>
<div class="notification m-b-md">
<p>This article is part of our Easy Node Authentication series.</p>
<ul>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local" class="alert-link">Getting Started and Local Authentication</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-facebook" class="alert-link">Facebook</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-twitter" class="alert-link">Twitter</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-google" class="alert-link">Google</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/easy-node-authentication-linking-all-accounts-together" class="alert-link">Linking All Accounts Together</a>
</li>
<li>
<a href="https://scotch.io/tutorials/javascript/upgrading-our-easy-node-authentication-series-to-expressjs-4-0" class="alert-link">Upgrading for ExpressJS 4.0</a>
</li>
</ul>
</div>
</div>
</div>
<aside class="column is-3-tablet">
<div class="sidebar sidebar--right">
<div class="sidebar__box" style="background: none">
<div align="center" id="div-gpt-ad-300x250-Sidebar" class="freestarred" style="display: none">
</div>
<a class="button is-small is-outlined freestarred" href="https://bit.ly/2nKT9xd" style="display: none; font-size: 12px; line-height: 1.7; background: none; border: none; box-shadow: none; color: #FFF;">
Advertise Here
</a>
</div>
<a class="get-node-book" href="https://bit.ly/2qeyCoh">
<h3 class="title">Free eBook</h3>
<img src="./routes_files/ZOPkchuTainmbhE2oHIA_first-node-app.png" class="loading" data-was-processed="true">
<h3 class="title">Learn Node</h3>
</a> <nav class="latest-content latest-content--posts panel p-a-0 pt-sm">
<p class="panel-heading">📺 Latest Courses</p>
<a href="https://scotch.io/courses/getting-started-with-scotch-box-vagrant-for-the-absolute-beginner" class="panel-block">
<div class="img" style="background-image: url(&#39;https://cdn.scotch.io/2/gjZj8VipSi6HPCR76eFN_getting-started-with-scotch-box.png.jpg&#39;)">
</div>
Getting Started with Scotch Box: Vagrant for the Absolute Beginner
</a>
<a href="https://scotch.io/courses/getting-started-with-vagrant-for-local-development" class="panel-block">
Getting Started with Vagrant for Local Development
</a>
<a href="https://scotch.io/courses/getting-started-with-less" class="panel-block">
Getting Started with Less
</a>
<a href="https://scotch.io/courses/10-web-performance-audit-tips-for-your-next-billion-users-in-2018" class="panel-block">
10 Web Performance Audit Tips for Your Next Billion Users in 2018
</a>
<a href="https://scotch.io/courses/getting-started-with-vue" class="panel-block">
Getting Started with Vue.js
</a>
<div class="panel-block">
<a href="https://scotch.io/courses" class="button is-danger is-outlined is-fullwidth">
More Courses
</a>
</div>
</nav>
<nav class="latest-content latest-content--posts panel p-a-0 pt-sm">
<p class="panel-heading">📑 Latest Posts</p>
<a href="https://scotch.io/bar-talk/code-challenge-5-build-a-movie-player" class="panel-block">
<div class="img" style="background-image: url(&#39;https://cdn.scotch.io/15139/hJzJcA2LRGSEy6V0EHbf_Build%20a%20Movie%20Player.png.jpg&#39;)">
</div>
Code Challenge #5: Build A Movie Player
</a>
<a href="https://scotch.io/bar-talk/mongodbs-drive-to-multi-document-transactions" class="panel-block">
MongoDB’s Drive to Multi-Document Transactions
</a>
<a href="https://scotch.io/tutorials/build-a-telegram-bot-with-laravel-and-botman" class="panel-block">
Build A Telegram Bot with Laravel and BotMan
</a>
<a href="https://scotch.io/tutorials/developing-a-creative-upload-interaction-with-javascript-and-canvas" class="panel-block">
Developing a Creative Upload Interaction with JavaScript and Canvas
</a>
<a href="https://scotch.io/tutorials/whats-new-in-webpack-4" class="panel-block">
What's New in webpack 4
</a>
<div class="panel-block">
<a href="https://scotch.io/tutorials?hFR%5Bcategory%5D%5B0%5D=Tutorials" class="button is-link is-outlined is-fullwidth">
More Posts
</a>
</div>
</nav>
<div class="sidebar__box sidebar__author m-b-lg">
<div class="author-guts guts">
<a href="https://scotch.io/@chris" class="profile-spot no-border">
<span class="img" style="background-image: url(&#39;//cdn.scotch.io/1/w7Vhk81SyClJPlDQPMLh_17795826_10154678250924582_8102840950354615336_n.jpg&#39;)"></span>
</a>
<div class="meta">
<h3><a href="https://scotch.io/@chris">
Chris Sevilleja
</a></h3>
<div class="post-count">
<a href="https://scotch.io/@chris">173 posts</a>
</div>
<div class="m-b"><p>Founder of Scotch.io. Google Developer Expert in Web Technologies. Slapping the keyboard until something good happens.</p></div>
<iframe id="twitter-widget-1" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-follow-button twitter-follow-button-rendered" style="position: static; visibility: visible; width: 262px; height: 28px;" title="Twitter Follow Button" src="./routes_files/follow_button.2e798283373a8137c24e277b9b9620d6.en(1).html" data-screen-name="chrisoncode"></iframe>
<div class="action m-t-sm m-b-0">
<a href="https://scotch.io/@chris" class="button is-warning is-inverted is-large is-fullwidth">
View My 173 Posts
</a>
</div>
</div>
</div>
</div>
<div class="stick-this-wrapper">
<div class="stick-this stuck" data-offset-top="60" style="width: 0px; top: 60px;">
<div class="m-b">
<div class="level sidebar__actions">
<div class="level-item">
<a href="https://github.com/scotch-io/easy-node-authentication/tree/local" class="button is-warning is-small btn-block" target="_blank">Code</a>
</div>
<div class="level-item">
<a href="http://node-auth.scotch.io/" class="button is-warning is-small btn-block" target="_blank">Demo</a>
</div>
<div class="level-item">
<a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#" class="button is-light is-small btn-block
            open-modal like-button
            " data-id="273" data-type="post" data-modal-target=".signup-modal" data-count="1" title="Like">
👍 1
</a>
</div>
<div class="level-item">
<a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#" class="button is-light is-small btn-block
            open-modal bookmark-button
            " data-id="273" data-type="post" data-modal-target=".signup-modal" title="Bookmark">
🔖
</a>
</div>
<div class="level-item">
<a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#comments-section" title="Comments" class="button is-light is-small btn-block">
💬 <span class="m-l-xs comment-number" data-id="273">474</span>
</a>
</div>
</div>
</div>
<div class="sidebar-related">
<a href="https://bit.ly/2rVqDcs" class="notification m-b-md"><strong>Related Course</strong> Getting Started with JavaScript for Web Development</a>
</div>
<div class="sidebar__box has-text-centered bsayyed">
<a href="https://synd.co/2zUt6Ls" class="m-t">
<img src="./routes_files/pY1nw0tRo6ujbfoQiWR4_HS_API_200x300__1_.png.jpg" class="loading" data-was-processed="true">
</a>
</div>
<div class="sidebar__box m-b-lg">
<div align="center" id="Scotch.io_300x250_300x600_Sidebar_BTF" class="freestarred" style="display: none">
</div>
<a class="button is-small is-outlined freestarred" href="https://bit.ly/2ESFyv4" style="display: none; font-size: 12px; line-height: 1.7; background: none; border: none; box-shadow: none; color: #FFF;">
Advertise Here
</a>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</article>
<div class="actions-bottom">
<div class="actions">
<a href="https://github.com/scotch-io/easy-node-authentication/tree/local" class="button is-danger" target="_blank">
<span class="is-small is-hidden-mobile" style="margin-right: 2px"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511 511" style="enable-background:new 0 0 511 511;" xml:space="preserve" width="50" height="50">
<g>
<path d="M471.5,56h-432C17.72,56,0,73.72,0,95.5v320C0,437.28,17.72,455,39.5,455h432c21.78,0,39.5-17.72,39.5-39.5v-320   C511,73.72,493.28,56,471.5,56z M39.5,71h432c13.509,0,24.5,10.991,24.5,24.5V120H15V95.5C15,81.991,25.991,71,39.5,71z M471.5,440   h-432C25.991,440,15,429.009,15,415.5V135h481v280.5C496,429.009,485.009,440,471.5,440z" fill="#dbdbdb"></path>
<path d="M39.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2   c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C35.59,102.2,37.53,103,39.5,103z" fill="#dbdbdb"></path>
<path d="M63.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2   c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C59.59,102.2,61.53,103,63.5,103z" fill="#dbdbdb"></path>
<path d="M87.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2   c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C83.59,102.2,85.53,103,87.5,103z" fill="#dbdbdb"></path>
<path d="M289.774,192.353c-3.945-1.255-8.165,0.926-9.421,4.873l-56,176c-1.256,3.947,0.926,8.165,4.873,9.421   c0.756,0.241,1.522,0.355,2.276,0.355c3.179,0,6.13-2.037,7.145-5.228l56-176C295.903,197.827,293.721,193.609,289.774,192.353z" fill="#dbdbdb"></path>
<path d="M324.803,210.197c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.677,0,10.606l66.697,66.697l-66.697,66.697   c-2.929,2.929-2.929,7.677,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197l72-72   c2.929-2.929,2.929-7.677,0-10.606L324.803,210.197z" fill="#dbdbdb"></path>
<path d="M204.803,210.197c-2.929-2.929-7.678-2.929-10.606,0l-72,72c-2.929,2.929-2.929,7.677,0,10.606l72,72   c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.677,0-10.606L138.106,287.5l66.697-66.697   C207.732,217.874,207.732,213.126,204.803,210.197z" fill="#dbdbdb"></path>
<path d="M119.5,103h304c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-304c-4.142,0-7.5,3.358-7.5,7.5S115.358,103,119.5,103z" fill="#dbdbdb"></path>
<path d="M455.5,103h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S451.358,103,455.5,103z" fill="#dbdbdb"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
Code
</a>
<a href="http://node-auth.scotch.io/" class="button is-warning" target="_blank">
<span class="is-small is-hidden-mobile" style="margin-right: 2px"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve" width="50" height="50">
<g>
<g>
<path d="M244.588,188.272c-37.345,0-67.728,30.383-67.728,67.728c0,37.346,30.382,67.729,67.728,67.729    s67.729-30.383,67.729-67.729C312.316,218.655,281.933,188.272,244.588,188.272z M244.588,307.734    c-28.526,0-51.734-23.208-51.734-51.735c0-28.526,23.208-51.734,51.734-51.734c28.527,0,51.735,23.208,51.735,51.734    C296.323,284.526,273.114,307.734,244.588,307.734z" fill="#dbdbdb"></path>
</g>
</g>
<g>
<g>
<path d="M491.854,123.702c0-20.676-16.82-37.497-37.497-37.497c-9.777,0-18.687,3.764-25.37,9.915    c-24.849-7.991-59.305-6.176-98.548,4.129c-2.488-7.854-5.173-15.402-8.059-22.59C302.285,27.579,274.658,0,244.588,0    c-30.07,0-57.697,27.579-77.793,77.658c-2.893,7.209-5.586,14.779-8.08,22.658c-7.994-2.093-15.833-3.853-23.475-5.252    c-53.074-9.717-91.143-1.061-107.184,24.373c-11.791,18.695-10.366,44.211,4.056,74.082c-7.348,6.85-11.954,16.603-11.954,27.417    c0,20.676,16.82,37.497,37.497,37.497c6.146,0,11.945-1.496,17.07-4.128c0.508,0.563,1.013,1.127,1.526,1.69    c-8.897,9.77-16.945,19.585-24.009,29.345c-31.637,43.712-40.227,81.792-24.186,107.226c11.75,18.63,35.313,28.257,67.941,28.257    c11.917,0,25.044-1.285,39.244-3.884c7.641-1.399,15.48-3.159,23.475-5.252c2.494,7.879,5.187,15.448,8.08,22.658    c20.096,50.078,47.724,77.658,77.793,77.658c30.071,0,57.697-27.579,77.793-77.658c2.893-7.209,5.586-14.779,8.08-22.658    c7.995,2.093,15.834,3.854,23.476,5.252c14.201,2.599,27.325,3.884,39.244,3.884c32.623,0,56.192-9.629,67.941-28.257    c16.041-25.435,7.451-63.515-24.186-107.226c-7.055-9.749-15.094-19.552-23.979-29.312c31.497-34.542,51.46-68.798,55.355-97.53    C482.095,152.948,491.854,139.448,491.854,123.702z M331.967,185.219c-9.68-6.914-19.702-13.65-30.023-20.16    c-13.06-8.236-26.241-15.884-39.413-22.903c19.371-8.948,38.515-16.359,57.063-22.075    C325.021,140.182,329.18,162.101,331.967,185.219z M181.638,83.613c17.245-42.972,40.19-67.619,62.95-67.619    s45.705,24.647,62.95,67.619c2.686,6.693,5.191,13.721,7.519,21.029c-22.48,6.939-46.252,16.462-70.483,28.333    c-23.99-11.742-47.748-21.281-70.472-28.275C176.434,97.371,178.945,90.324,181.638,83.613z M169.594,120.04    c18.433,5.679,37.606,13.112,57.056,22.105c-13.109,6.989-26.29,14.635-39.417,22.915c-10.321,6.51-20.343,13.247-30.024,20.161    C159.997,162.085,164.162,140.154,169.594,120.04z M41.585,127.968c12.143-19.252,45.229-25.511,90.776-17.172    c7.113,1.302,14.412,2.938,21.856,4.874c-6.812,25.191-11.695,53.073-14.466,82.505c-19.31,14.881-36.958,30.413-52.465,46.172    c-0.066-0.074-0.13-0.147-0.196-0.221c5.042-6.387,8.064-14.44,8.064-23.19c0-20.677-16.82-37.497-37.497-37.497    c-4.098,0-8.039,0.67-11.732,1.889C31.673,155.214,35.509,137.6,41.585,127.968z M138.106,292.125    c-14.438-11.747-27.792-23.854-39.845-36.149c12.002-12.233,25.36-24.348,39.847-36.126c-0.684,11.876-1.036,23.946-1.036,36.149    C137.07,268.194,137.422,280.258,138.106,292.125z M57.655,242.438c-11.857,0-21.503-9.646-21.503-21.503    c0-11.858,9.646-21.503,21.503-21.503c11.857,0,21.503,9.646,21.503,21.503C79.158,232.791,69.512,242.438,57.655,242.438z     M132.36,401.205c-45.549,8.338-78.633,2.078-90.776-17.172c-12.141-19.252-3.535-51.806,23.613-89.317    c6.513-8.999,13.908-18.056,22.075-27.086c15.58,15.842,33.217,31.365,52.478,46.207c2.771,29.428,7.654,57.306,14.465,82.494    C146.772,398.267,139.473,399.903,132.36,401.205z M157.21,326.79c9.68,6.911,19.702,13.643,30.023,20.151    c13.064,8.239,26.25,15.888,39.427,22.911c-19.454,8.994-38.63,16.429-57.065,22.109C164.162,371.85,159.999,349.92,157.21,326.79    z M307.538,428.387c-17.245,42.974-40.188,67.619-62.95,67.619c-22.761,0-45.705-24.647-62.95-67.619    c-2.692-6.711-5.203-13.757-7.536-21.086c22.728-6.996,46.492-16.538,70.487-28.283c23.995,11.745,47.758,21.287,70.486,28.283    C312.742,414.629,310.231,421.676,307.538,428.387z M319.582,391.96c-18.436-5.68-37.611-13.114-57.065-22.109    c13.177-7.021,26.363-14.672,39.427-22.911c10.358-6.533,20.378-13.268,30.023-20.156    C329.178,349.918,325.015,371.849,319.582,391.96z M293.412,333.413c-16.191,10.212-32.553,19.49-48.824,27.743    c-16.27-8.252-32.633-17.531-48.824-27.743c-14.2-8.957-27.812-18.334-40.71-28.022c-1.313-16.07-1.991-32.596-1.991-49.392    c0-16.794,0.677-33.316,1.99-49.385c12.891-9.682,26.505-19.069,40.71-28.029c16.196-10.215,32.549-19.482,48.833-27.739    c16.268,8.251,32.628,17.529,48.814,27.739c14.205,8.959,27.819,18.346,40.71,28.028c1.313,16.069,1.99,32.591,1.99,49.385    c0,16.779-0.676,33.286-1.986,49.34C321.264,315.023,307.645,324.436,293.412,333.413z M423.978,294.715    c27.149,37.51,35.756,70.065,23.613,89.317s-45.229,25.51-90.776,17.172c-7.113-1.302-14.413-2.938-21.857-4.874    c6.811-25.189,11.694-53.069,14.465-82.499c19.475-15.007,37.119-30.559,52.504-46.175    C410.086,276.678,417.472,285.726,423.978,294.715z M351.069,219.85c14.484,11.776,27.841,23.888,39.841,36.12    c-11.926,12.121-25.289,24.249-39.836,36.097c0.68-11.849,1.032-23.893,1.032-36.067    C352.105,243.797,351.753,231.726,351.069,219.85z M401.9,244.354c-15.51-15.761-33.161-31.297-52.474-46.181    c-2.771-29.428-7.653-57.306-14.464-82.495c34.146-8.911,63.584-10.844,84.489-5.648c-1.667,4.239-2.593,8.849-2.593,13.674    c0,19.772,15.385,36.007,34.81,37.391C446.786,185.41,428.945,214.584,401.9,244.354z M432.853,123.702    c0-11.857,9.646-21.503,21.504-21.503c11.857,0,21.503,9.646,21.503,21.503c0,11.858-9.646,21.503-21.503,21.503    C442.498,145.205,432.853,135.559,432.853,123.702z" fill="#dbdbdb"></path>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
Demo
</a>
</div> </div>
<div class="article__extra article__extra--author">
<div class="container">
<div class="author-guts guts">
<a href="https://scotch.io/@chris" class="profile-spot no-border">
<span class="img" style="background-image: url(&#39;//cdn.scotch.io/1/w7Vhk81SyClJPlDQPMLh_17795826_10154678250924582_8102840950354615336_n.jpg&#39;)"></span>
</a>
<div class="meta">
<h3><a href="https://scotch.io/@chris">
Chris Sevilleja
</a></h3>
<div class="post-count">
<a href="https://scotch.io/@chris">173 posts</a>
</div>
<div class="m-b"><p>Founder of Scotch.io. Google Developer Expert in Web Technologies. Slapping the keyboard until something good happens.</p></div>
<div class="links">
<div class="author-links">
<a href="https://scotch.io/@chris" target="_blank" title="Profile">
<span class="icon icon-scotch">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="35">
<image width="100%" height="100%" xlink:href="data:img/png;base64,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"></image>
</svg> </span>
</a>
<a href="https://twitter.com/chrisoncode" target="_blank" title="Twitter @chrisoncode">
<span class="icon color-twitter">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 410.155 410.155" style="enable-background:new 0 0 410.155 410.155;" xml:space="preserve" width="50" height="50">
<path style="fill:#FFF;" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
	l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
	c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
	c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
	c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
	c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
	c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
	c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
	c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
	c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
	c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
	c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
	l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"></path>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
</a>
<a href="https://facebook.com/sevilayha" target="_blank" title="Facebook">
<span class="icon color-facebook">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="50" height="50" viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
<g>
<path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" fill="#FFFFFF"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
</a>
<a href="https://github.com/sevilayha" target="_blank" title="GitHub">
<span class="icon icon-github">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="50" height="50" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
<path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027   c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5   c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25   c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66   c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5   c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8   s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25   c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25   s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5   v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094   c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675   c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41   s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353   C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z" fill="#FFFFFF"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
</a>
<a href="https://instagram.com/chriscode.chrislift" target="_blank" title="Instagram">
<span class="icon icon-instagram">

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="50" height="50" viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;" xml:space="preserve">
<g>
<path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z" fill="#FFFFFF"></path>
<path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" fill="#FFFFFF"></path>
<path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z" fill="#FFFFFF"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
</a>
<a href="https://plus.google.com/+ChrisSevilleja-scotch" target="_blank" title="Google+">
<span class="icon icon-google-plus">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 458.246 458.246" style="enable-background:new 0 0 458.246 458.246;" xml:space="preserve" width="50" height="50">
<g>
<path style="fill:#F34A38;" d="M160.777,259.368h71.594c-12.567,35.53-46.603,61.004-86.45,60.71
        c-48.349-0.357-88.327-39.035-90.204-87.349c-2.012-51.789,39.537-94.563,90.887-94.563c23.479,0,44.905,8.946,61.058,23.605
        c3.826,3.473,9.65,3.495,13.413-0.047l26.296-24.749c4.112-3.871,4.127-10.408,0.027-14.292
        c-25.617-24.269-59.981-39.396-97.876-40.136C68.696,80.969,0.567,147.238,0.004,228.078
        c-0.568,81.447,65.285,147.649,146.6,147.649c78.199,0,142.081-61.229,146.36-138.358c0.114-0.967,0.189-33.648,0.189-33.648
        H160.777c-5.426,0-9.824,4.398-9.824,9.824v35.999C150.953,254.97,155.352,259.368,160.777,259.368z"></path>
<path style="fill:#F34A38;" d="M414.464,206.99v-35.173c0-4.755-3.854-8.609-8.609-8.609h-29.604c-4.755,0-8.609,3.854-8.609,8.609
        v35.173h-35.173c-4.755,0-8.609,3.854-8.609,8.609v29.604c0,4.755,3.854,8.609,8.609,8.609h35.173v35.173
        c0,4.755,3.854,8.609,8.609,8.609h29.604c4.755,0,8.609-3.854,8.609-8.609v-35.173h35.173c4.755,0,8.609-3.854,8.609-8.609v-29.604
        c0-4.755-3.854-8.609-8.609-8.609L414.464,206.99L414.464,206.99z"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
</a>
</div> </div>
</div>
</div>
</div>
</div>
<div id="comments-section" class="article__extra article__extra--comments">
<div class="container">
<div data-spotim-module="recirculation" data-spot-id="sp_D7GE1sbz"></div>
<div class="columns">
<div class="column is-8 is-offset-2">
<div class="spot-im-frame-inpage" data-post-id="273"></div>
</div>
</div>
</div>
</div>
</main>

<footer id="site__footer">
<div class="footer__projects is-hidden-mobile is-hidden-tablet-only">
<div class="container">
<div class="columns center-flex-v">
<div class="column is-half-desktop">
<div class="owners">
<h5 class="m-t-0 m-b-sm" style="letter-spacing:0">
<a href="https://scotch.io/about">💖 A side project brought to you from Las Vegas and DC by...</a>
</h5>
<div class="owners__faces">
<div class="owner">
<a class="owner__img" href="https://scotch.io/@chris" style="background-image: url(&#39;data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZDQ0FFMEEyMTlBMDExRThCRDY0RTUwMzUxQkI2QzY3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZDQ0FFMEExMTlBMDExRThCRDY0RTUwMzUxQkI2QzY3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNUNCOTAzREEwMEE3M0FFMTBCMzI4QzIxQ0U5Q0U0RjUiIHN0UmVmOmRvY3VtZW50SUQ9IjVDQjkwM0RBMDBBNzNBRTEwQjMyOEMyMUNFOUNFNEY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwM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&#39;)">
</a>
<div class="owner__text">
<span><a href="https://scotch.io/@chris">Chris Sevilleja</a></span>
<iframe id="twitter-widget-2" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-follow-button twitter-follow-button-rendered" style="position: static; visibility: visible; width: 262px; height: 28px;" title="Twitter Follow Button" src="./routes_files/follow_button.2e798283373a8137c24e277b9b9620d6.en(2).html" data-screen-name="chrisoncode"></iframe>
</div>
</div>
<div class="owner">
<a class="owner__img" href="https://scotch.io/@nick" style="background-image: url(&#39;data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdFRTZGNkVGMTlBMDExRThBN0YyQ0Y1NjYzQThDM0NEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdFRTZGNkVFMTlBMDExRThBN0YyQ0Y1NjYzQThDM0NEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMEU5MzVCQzk1Q0UwMkQ1OTFBQzFEMzRDNEM2RkMyNUMiIHN0UmVmOmRvY3VtZW50SUQ9IjBFOTM1QkM5NUNFMDJENTkxQUMxRDM0QzRDNkZDMjVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwM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&#39;)">
</a>
<div class="owner__text">
<span><a href="https://scotch.io/@nick">Nick Cerminara</a></span>
<iframe id="twitter-widget-3" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-follow-button twitter-follow-button-rendered" style="position: static; visibility: visible; width: 280px; height: 28px;" title="Twitter Follow Button" src="./routes_files/follow_button.2e798283373a8137c24e277b9b9620d6.en(3).html" data-screen-name="whatnicktweets"></iframe>
</div>
</div>
</div>
</div>
</div>
<div class="column is-one-quarter-desktop">
<div class="box is-black">
<a class="img" href="https://bit.ly/2tDcLEK" style="background-image:url(&#39;https://cdn.scotch.io/1/YvZBkTwiT1q9npSHQJsS_custom-box.jpg&#39;)">
</a>
<h4>Easiest Local Dev Environment</h4>
</div>
</div>
<div class="column is-one-quarter-desktop">
<div class="box is-black">
<a class="img" href="https://scotch.io/courses/getting-started-with-vue" style="background-image:url(&#39;https://cdn.scotch.io/1/RjI4JuTvOafSNq04qcRQ_Getting%20Started%20With%20Vue.png.jpg&#39;); background-position: center center;">
</a>
<h4>Get Started with Vue.js</h4>
</div>
</div>
</div>
</div>
</div>
<div class="footer__top">
<div class="container">
<div class="columns center-flex-v">
<div class="column is-half">
<div class="footer__about">
<div class="about__title">
<div class="logo center-flex-v">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="70">
<image width="100%" height="100%" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd8AAAM5BAMAAAC0rCbdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAAD////NqEjt1H+lfjGkfjCkfS8AAAB5F91IAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfhAwIPGBhmTpfuAAAQs0lEQVR42u3cS24cSw4FUKVdC8jawYMGGj9ArbnQXUt4mjcagva/hLY+lqsq40MyyCCZde/MhpQZJy8jsiwbvrujZDm+ZyV9rUM+VnfUvOLNgY8ZwJrLAzhWAA54xRRgb1c1+i8RgGMFYIABBhhggAMFYIABplwwOlhxfQAHC8DhLghwsPUF/zm8/msT4GgBGGCAAQYY4EABGGCACdcLD9ZbIMDRAnCw6yUBe6sa0X6NABwtAAMMMMAAAxwoAAMMMMCby8UHq60Q4HABONTlsoBXb1UrAAMMMMAAe6MABhjgoaslAGstEeB4AVjhat6mZnTPVYDjBWCA2RfLAFZaI8ABYwBevU0AXwRggAHuXCsFWGeRAEcMwMPX8hZ1onmyAhwxAI9eKgdYZZUAhwzAo5davUW9AAwwwM0rJQFrLBPgmNEGe3u60TtqAI4ZgMculAWssE6Ag0YZvHp7+gEYYIAb10kDHl8owFGjC/bWEKJ12AAcNUrgLJ8s1VYKcNiogldvDSUAA0y/SiLw6FIBjhtNsLeFFJ3jBuC4UQHn+aCltFaAA0cRvHpbaAEYYOo1UoHHFgtw5OiBvSXEaBw4twbO9LlDZbUAhw7A0kus3hJqABZeIRl4ZLkAx44W2NtBzviRc2vgXK9hhfUCHDxK4NXbQQ/Aou9PB5YvGODo0QF7KxgZPXRuDZztNTy8YoDDRwW8eis4GQOneyuNLhng+AFY8N3eBlaGztl8b6XBNQOcIArg1dvAC8Ds700Jli0a4AwZB3sLmBk4eDK+lYZWDXCKDINXbwE3cnDKQ3pk2QDnyCjYe/3zwDkP6YF1A5wkAPO+cfVePz9ScNK3knzhAGfJGNh79YIID5+sh7R45QCnyRB49V69JDJw2kNaunSA80S09LxnlnDtACcKwJQkPrNkiwc4U+Rg75ULI/hYnPnMEq0e4FQRg1fvlUvDB6c+pCXLBzhX2MvPfWYJ1g9wsgDcS/Iziw8AOFuYgOxbmC0AOF0Abif9mcUlAJwvLEL+Lcw0AJwwALeygzOLhwA4YxiIPWxhlgLglAG4nl2cWRwGwDlDZuxjCzMcACcN2bGTLUyHAJw1AJezlzOLLAE4bYiS3WxhKgXgvCFR9rOFiRaAEwfgUnZ0ZtEwAGcOAbOnLUzSAJw6BM2utjCFA3DuAHydfZ1ZBA/AydP17GwL90EAZ08HtLct3BUBnD4AX2Z3Z1aPBHD+NEn728IdE8A7CMDn2eGZ1UYBvIc0UHvcwk0VwLsIwH+yyzOrxQJ4H6my9rmFGy6AdxKAf2enZ1YdBnDs/Lj/yl9jYG8HU0shL2VwojPrktslV2R5wPeFtMTJwT/u75niJnj19vRyX0tDXAbnOKTv7wXiMi0F+P5eIs4Lvm9HAvYmtfKj461WXDye4h/SXW9VXLTFB/e9taHOCaZ4KxU3wKs3a8xbq7gEDn5IE72Viku42GCqt1JxOjDhgG5WXAd7y4a95YoLB1ToQ5rjLVZc0EUGs7zFinOBWQPNBK/eOAVvcaa34LiHNNdbrHjLCwvme0sV5wGzB5oH9uapeEsznQYs8hYq3pzJQd9KsoKr4GPjN0JE6C3MdBKw1EsGr97Cy4gLLsx0BrDcW6j4GhzxNTzgrYHX6q8DZKTg7UwnAI94qWBvo5p3O9NLdPDQQPfB8V7Dg97NTF8Jw4FHC04HHvXSwKs3U8+73cShwcMD3QUHew0reDczfUmMBdYoOBVYw0sCe0O/olLwZhMvccE63jxgpYKb4EifO7S8ZfAxHljLe31qRQWrFUwAr97Y96h5K++laGC9gpOA9bybU+scHOaDlmLBFfAaC6zpzQBWLbgPZq7u8SxKYFVv+b0kBT9u8ne0ghXBPx/LGTXrehtg3getGneYrFxw46MWC/zYzgBZ2asD/vnYTZSCVcAEr5is7b1+L23Aq5ZXNtfqBTc+W1LBRK5MrO8dBtO9grE2KHgUTJ1nmdjAWweTPkozvcyxtii4/mGaAmZ7eWIL7/V7iQfmezlik4J7YHUvQ2zirX+Y7oMFA80R2xQ8AhZ6qWIb7wBYWjBRbFSwHDzgJYmNvHLwiJcgtiq4Cu79YWmoYILYylv982EPPOjtic0Krv75sAMeLfix87naztsGr2YFt8WGBdf+9NAGKxTcFBt6ZWAVb30bWxbsCa6KLb0isM5EV4fatGARWMtbEZt6JWC1gstDbVtwDXycAy6Jbb21n/G0wIrewlAbFywAaxZcEBt7/cFXQ21dcBtsP9EbsbW39s8t62Dlgq+G2rzgCODzis29fLC691xs7w0B/h7qHwHB+hN9VvEEbwzw47yCg4AfpxXMBtt4P4Z6SsFRwI+zCuaCjSb6veI5BYcBP/49xxsH/K+YYDvvy79vC/xyOt0U+Omf02lOxTzwT8OCJ1UcA/xe8KSKY4A/Cp4jDgH+LHjOUEcAP30VPKViHth0oOdUHAD8PdBTKg4APivYvuK//MHnBdtXHAB8UbB5xf7gl38uwcYVu4OfrrzWFfPAP80H2rxib/C2YOOKncFP24KNK3YGl7y2FfuCSwNtXPE16XgBXo3B5YJNK3YFv/xTARtW7Al+qnktK/YEv1S9hhWXwbV/iacKbhRsWDEPrPnR8qlRsF3Ff/mBm16ziv3AzYG2q7gDPpqBnzoFW1V8DV5mgbvenYGrHzmsZ5oL/jlroK0qviuC17s72z89ULw2FfuACQNtVPFDD7xagHtvJMOK38pvpTr47j8KXtJA21T8Xzb4pDDQVK9+xQ8eYOIGtgE/18GVz5an0ZmmbmCTmX6rgC/eyLpg+ga2qPi1fEi3wIfBmWZ51SsWgYcqZmxgg4ofROCRilkbWL/ih1MDXPvrtBEwbwPrg7dn1vnRXHsvyWda4NWd6dfGW6kBFlcs8KpW/CAFCyvmHlif+Z8i+NQEVz55HKQVy7ynVz3w2+bMKvyX6aVjWlQx/4BW38WvzUO6BRZULDmwlMEPMvD7JuZXLPfqHVuFLXxprJ9a7IpHvGoVv7XPrDaYV/GQV63iVyH4wK540KtUcWELc8CMike9ShU/nHrg1jHNqHjcqwN+O7UP6fYxTRcreHVm+rV3SPfAtKHW8KpU/NAHN49povhFxatR8a8t3DmkO6cWaaiFn58tKn7rnll9cE/8pOYdr/jXRFPB1U3cEyuNs07FpYlersFLF3yaUq9GxW+n/plFAVdPLtV6FSp+ZYAbm7hW8otuveMVN7bwcfM7HfC2ZAPuKPjXRPfPrPr/E7dZzcXeteCeBmf6lXJmUY7p87x8xkQ7WPEDEUw5tf7EpliVit8nun9mUU+tWRmo+FfBlDOLemrNytBEU84sxqkVu+LiRDfA1E0cteKPgilnVv3UOqQSP7x/610FTHgKjmDZUL8VweXpjbWJZRWXJ7pCC7aJRRV/FEzbwnXwIVHF7wVXt/BK+20/ML/ihzK4UuUSbRPzKy5PdHV2w4G5FX8WTD2zAm5irvijYPIWjgjmDfVnwQxwvE3Mq/izYPoWjgjmVPxVMAMccaYZ4s+CGRMdE0we6q+CWeCIM00WfxXMmeg62LNi4lBXC26BQ840seKvglkT/Q2ONdMk8dtXwc90U9hNTBH/HmjeFv4GB5tpwjb+PdAnOqnzOHzBPfHvgS4U3NzCUTdxT/w90NwtHPXF1BE/fA8086UUeBM3xX+87C0cdxM3xN8bWLCFGyN/8PbWxGfeE8OTYKaL7+OHc69gokPP9Glb8tl5dRJNdOyZPl2V/PB24ZVMdPCZ/kiNK5voxtd4Q8/z9p7r33wWgaPPdCOiiW7tc29QJ89V8B0FHHymSWDSROedaeFEt77Mm9TMsxhcH4SDN6oVDmQXMy0uOOlMyyc66UwPTHTKikcK/v7STBXXC6aAE8700EQnnOmxiU4402MT3fxqb1ox9YJpE92ah4M3rhSWgDnTESsuFMyb6ObXH7x52/Aay1+xQsFN8MEbeB3ehO5gpjUmOtNMq0x0pop1Cv4Gh6/4mbd20UwfvJHn4U2nbKYjVVwoWDTRaSpWKzhJxYoFt7e+N7ThlR1Z50+qVPHBm/oZ7rLlMx2j4lLB4onufOvBG/sedk3JK9YuuL39D97cdsEicHv/e3PbBa93ksSuWL/gzvNyFvMXPFqx71A/WxQcuWKTggNXbFTwn0uUn1ks73fBA+DONQ5eYEk7mSu2K7h7lUBelYK7lzl4gEXVJK7YtOD+hYJ41QruXukwGyzrRbHiyWJZLZoVzx3qZ/OCCRfz96oW3L/aYR5Y2olyxdPE0kq0K5411M9zCqZc0NWrXjDlip5e9YJJl/TzGhRMuebBGjzShknFxuKRMmwqthUPdTFUsY94bGFjFTcepJl4cF1mFVuJR5clC+lRmoiHVyUL7VkaiMcXJQzxYSpznzXWJMviISZ6LQqmX36al1qBufig5W3fxtzLuMOEes0H+vIWE8Q9r33B5/foPtThsVZcy0COjLuY1suZtpEsnNsMlKz76EdyZD1YIVl9HfPEEjJlFaxJG8vCnSUm2WYRIzmyb8Yg89ewmoMXvph4Yj/bPfOhHGX309JeLmCdAJbfsDrbrNsvs72XQ82/pbTY0t2neK+Gmi8eyuDTVrjpXPHlrafd9ugldnvUXmK30Vp8xJd3nei9vvUksdtOuttUPOXuR8eCN3ef/CF+/utwU7G1eJn+gK9znCreeNfp4G3Fc3566FVwqeIJPxD3K7hYsfnf8XgWXFyH7V9b+hZcqdjwnx54F1wBK69msb8FPRWwZsnmN2ClVrFaA1NmSAWs04H181Rckcai6o9T5Wmqg0fJjQv7gZe2eGBhhk/SECwmd67rB77rgUWr6z1G4VOcBeaS+9cLD5b8j5rJwcRVqj8+/fS2G322GVdy9DLBtXqYV8kFVgjAAAOcGrzeGvjmGgYYYIABBhjgSjy8SX4AAHBK8OICjvxzaYABzgX28Yb928P9gRcncMR/AbBPsJfXbaYB3jl4cQMH+5d4uwX7eZ1m+tbAiyPYZaZvDuzpdZnpWwMvrmCHmb45sK/XYaYB3jl4cQZP38Q3B/b2Tp9pb6/r/x/iE4BN4609zp5pb+1s8OKtfQ/AhvG2fmQF2CyLt/UzAJvFW/qVFWCjLN7S3wEYYJ14O7+zAmySxdv5JwCbxFt5lhVggyzeyvMAbBBv40VWgNWzeBsvA7B6vIVXWQFWzuItvA7AyvH2bbICrJrF27cNwKrx1hWyAgywPIu3rhSAFeNtK2YFWC2Lt60cgNXiLatkBVgpi7esFoCV4u2qZgVYJYu3qx6A9z3RVjPtrZoNXrxVrQC874m2mWlv02zw4m1qB+B9T7TFTHuLZoMXb1EvAAPMi7enmxXgfU+09kzfHNhbQ4juTHtrADYGL94aSgAGmB5vCykrwABTs3hbaAEYYIAr8ZYQswIMMMAAv2fxllADMMAAAwxw5AAMMMAAAxw5AEvjDSFmBRhggFOD1bxZjmmAdz7TK8AAk7N4YyhR9KaoWLPgGwQv3px+VL23B44/07oTnaBiZW/4irULDl+xujd4xfoFB6/YwBu6YouCQ1ds4g0sNvKGHWqbgY4rNvTGHGpDb0ixqTeg2NgbTmzuvQt1cq0zvIFKnsMNU/KkesOUPJMbgDyb60z24PqRVy+uj9lV+5mbKfcsU3r2Rl7nNqqdgY6K/Z1lz2Ncz+571XMnlbLls5z/BwPxdwyhWA63AAAAAElFTkSuQmCC"></image>
</svg> </div>
<h4>Scotch</h4>
</div>
<p class="p-r-lg">Top shelf learning. Informative tutorials explaining the code <strong style="color: #DDD">and the choices behind it all.</strong></p>
<ul class="social-links list-unstyled">
<li><a href="https://twitter.com/scotch_io" class="icon-twitter">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 410.155 410.155" style="enable-background:new 0 0 410.155 410.155;" xml:space="preserve" width="50" height="50">
<path style="fill:#FFF;" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
	l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
	c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
	c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
	c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
	c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
	c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
	c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
	c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
	c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
	c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
	c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
	l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"></path>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</a></li>
<li><a href="https://facebook.com/scotchdevelopment" class="icon-facebook">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="50" height="50" viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
<g>
<path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" fill="#FFFFFF"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</a></li>
<li><a href="https://github.com/scotch-io" class="icon-github">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="50" height="50" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
<path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027   c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5   c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25   c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66   c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5   c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8   s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25   c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25   s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5   v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094   c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675   c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41   s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353   C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z" fill="#FFFFFF"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</a></li>
</ul>
</div>
</div>
<div class="column is-half text-right hidden-xs hidden-sm">
<nav class="footer__links">
<ul>
<li>
<a href="https://scotch.io/">Scotch</a>
<ul>
<li><a href="https://scotch.io/about">About</a></li>
<li><a href="https://scotch.io/authors">Authors</a></li>
<li><a href="https://scotch.io/contact">Contact</a></li>
<li><a href="https://shop.scotch.io/">Shop</a></li>
</ul>
</li>
<li>
<a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#">Community</a>
<ul>
<li><a href="https://scotch.io/tutorials&amp;hFR%5Bcategory%5D%5B0%5D=Community">Posts</a></li>
<li><a href="https://scotch.io/top-authors">Top Authors</a></li>
<li><a href="http://slack.scotch.io/">Slack</a></li>
</ul>
</li>
<li>
<a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local#">Extras</a>
<ul>
<li><a href="https://box.scotch.io/">Scotch Box</a></li>
<li><a href="https://angularmachine.com/">Angular v5+ Book</a></li>
<li><a href="https://scotch.io/advertise">Sponsor Scotch</a></li>
<li><a href="https://orders.scotch.io/">Display Advertising</a></li>
</ul>
</li>
</ul>
</nav>
</div>
</div>
</div>
</div>
<div class="footer__bottom footer--dark">
<div class="container">
<div class="footer__copyright columns">
<div class="column has-text-left">
<nav>
<ul class="list-unstyled" style="justify-content: flex-start">
<li><a href="https://scotch.io/faq">FAQ</a></li>
<li><a href="https://scotch.io/privacy">Privacy</a></li>
<li><a href="https://scotch.io/terms">Terms</a></li>
<li><a href="https://scotch.io/rules">Rules</a></li>
<li><a href="https://m.do.co/c/7a59e9361ab7">Hosted by Digital Ocean</a></li>
</ul>
</nav>
</div>
<div class="column has-text-right">
1853-2018 © Scotch.io, LLC. All Rights Super Duper Reserved.
</div>
</div>
</div>
</div>
</footer>
<div class="modal   login-card login-modal">
<div class="modal-background"></div>
<div class="modal-card">
<div class="modal-card-head">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100">
<image width="100%" height="100%" xlink:href="data:img/png;base64,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"></image>
</svg> </div>
<div class="modal-card-body p-a">
<div class="social-logins m-b">
<div class="columns is-gapless">
<div class="column">
<a href="https://scotch.io/social/github" class="button is-dark is-large p-a social-button social-github">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="50" height="50" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
<path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027   c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5   c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25   c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66   c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5   c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8   s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25   c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25   s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5   v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094   c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675   c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41   s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353   C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z" fill="#FFFFFF"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</a>
</div>
<div class="column">
<a href="https://scotch.io/social/facebook" class="button is-info is-large p-a social-button social-facebook">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="50" height="50" viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
<g>
<path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" fill="#FFFFFF"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</a>
</div>
<div class="column">
<a href="https://scotch.io/social/twitter" class="button is-info is-large p-a social-button social-twitter">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 410.155 410.155" style="enable-background:new 0 0 410.155 410.155;" xml:space="preserve" width="50" height="50">
<path style="fill:#FFF;" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
	l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
	c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
	c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
	c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
	c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
	c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
	c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
	c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
	c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
	c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
	c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
	l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"></path>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</a>
</div>
</div>
</div>
<p class="m-b-sm has-text-centered is-size-7">or do the email thing</p>
<form id="login-form" class="login-form" method="POST" action="https://scotch.io/login">
<input type="hidden" name="_token" value="Wo8gIrdz6mZFwGf9CUkhdK8FB9EhucTPpcv9bMRA">
<div class="field">
<input type="email" class="input is-small" name="email" value="" placeholder="Email" tabindex="1">
</div>
<div class="field">
<input type="password" class="input is-small" name="password" placeholder="******" tabindex="2">
</div>
<div class="field">
<input class="is-checkradio is-small is-block" id="remember" type="checkbox" name="remember" value="1" checked="">
<label class="m-l-0 is-size-7" for="remember">Remember Me</label>
</div>
<div class="field">
<button type="submit" class="button is-primary is-block" tabindex="4" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Auth&#39;, &#39;login&#39;)">
Login
</button>
</div>
</form>
</div>
<div class="modal-card-foot">
<div class="level">
<div class="level-left">
<div class="level-item">
<a href="https://scotch.io/password/reset">Forgot password?</a>
</div>
</div>
<div class="level-right">
<div class="level-item">
<a href="https://scotch.io/registering">Don't have an account? Sign Up</a>
</div>
</div>
</div>
</div>
</div>
</div> <div class="modal   login-card signup-modal">
<div class="modal-background"></div>
<div class="modal-card">
<div class="modal-card-head">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100">
<image width="100%" height="100%" xlink:href="data:img/png;base64,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"></image>
</svg> </div>
<div class="modal-card-body has-text-centered p-y-lg">
<h2 class="m-t-0 m-b-md">Get Access</h2>
<p class="m-b-md">Create an account now to get access to all premium content.</p>
<a href="https://scotch.io/registering" class="button is-primary is-large">Create an Account</a>
</div>
<div class="modal-card-foot">
<div class="level">
<div class="level-left">
<div class="level-item">
<a href="https://scotch.io/password/reset">Forgot password?</a>
</div>
</div>
<div class="level-right">
<div class="level-item">
<a href="https://scotch.io/login" class="open-modal" data-modal-target=".login-modal">Already have an account? Login</a>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
    // hold all our scroll listeners in one place
    var scrollListeners = [];
</script>
<script>
function loadSpotComments() {
    !function(t,e,n){function a(t){var a=e.createElement("script");a.type="text/javascript",a.async=!1,a.src=("https:"===e.location.protocol?"https":"http")+":"+n,(t||e.body||e.head).appendChild(a)}function o(){var t=e.getElementsByTagName("script"),n=t[t.length-1];return n.parentNode} var p=o();t.spotId="sp_D7GE1sbz",t.parentElement=p,a(p)}(window.SPOTIM={},document,"//www.spot.im/launcher/bundle.js");
}
</script>
<script data-cfasync="false" src="./routes_files/magic-59e64c473a.js.download"></script>
<script>
window.addEventListener('scroll', debounce(() => {
    scrollListeners.forEach(scrollAction => scrollAction());
}, 15))
</script>
<script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-36045075-1', 'auto');
        ga('set', 'transport', 'beacon');

                    // set the author of the article
                        ga('set', {            
                dimension1: 'Chris Sevilleja',
                metric1: 'Chris Sevilleja',            
            })
                            
        ga('send', 'pageview');
    </script>
<script async="" src="./routes_files/widgets.js.download" charset="utf-8"></script>
<script>setInterval(function(){var e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject('Microsoft.XMLHTTP');e.open('GET','/genealabs/laravel-caffeine/drip',!0);e.setRequestHeader('X-Requested-With','XMLHttpRequest');e.send();}, 600000);</script>

<iframe scrolling="no" frameborder="0" allowtransparency="true" src="./routes_files/widget_iframe.2e798283373a8137c24e277b9b9620d6.html" style="display: none;"></iframe><iframe id="rufous-sandbox" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" style="position: absolute; visibility: hidden; display: none; width: 0px; height: 0px; padding: 0px; border: none;" title="Twitter analytics iframe" src="./routes_files/saved_resource.html"></iframe></body></html>
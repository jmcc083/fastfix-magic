# Clones Device Doctor

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Clones Tech Repair — Premium Device Repair in Clones</title>
<meta name="description" content="Fast, honest, expert repairs for phones, tablets, consoles and smart home systems. Same-day service. Fair prices. Trusted across Clones." />
<link rel="preconnect" href="[fonts.googleapis.com](https://fonts.googleapis.com)">
<link href="[fonts.googleapis.com](https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap)" rel="stylesheet">
<style>
  :root{
    --bg:#0b0b0f;
    --bg-alt:#14141c;
    --bg-card:#181820;
    --gold:#d4af37;
    --gold-light:#f1d78c;
    --text:#f5f5f2;
    --text-muted:#a7a7b3;
    --border:#2a2a35;
    --radius:16px;
    --maxw:1180px;
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--bg);
    color:var(--text);
    font-family:'Inter', sans-serif;
    line-height:1.6;
    overflow-x:hidden;
  }
  h1,h2,h3,.serif{ font-family:'Playfair Display', serif; }
  .container{ max-width:var(--maxw); margin:0 auto; padding:0 24px; }
  a{ text-decoration:none; color:inherit; }
  img{ max-width:100%; display:block; }
  .gold-text{
    background:linear-gradient(90deg, var(--gold-light), var(--gold));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }
  .eyebrow{
    text-transform:uppercase;
    letter-spacing:2.5px;
    font-size:13px;
    font-weight:600;
    color:var(--gold);
    margin-bottom:14px;
    display:block;
  }
  .btn{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:14px 28px;
    border-radius:999px;
    font-weight:600;
    font-size:15px;
    cursor:pointer;
    border:1px solid transparent;
    transition:transform .2s ease, box-shadow .2s ease, background .2s ease;
  }
  .btn-primary{
    background:linear-gradient(90deg, var(--gold-light), var(--gold));
    color:#1a1405;
    box-shadow:0 8px 24px rgba(212,175,55,0.25);
  }
  .btn-primary:hover{ transform:translateY(-2px); box-shadow:0 12px 30px rgba(212,175,55,0.35); }
  .btn-outline{
    border:1px solid var(--gold);
    color:var(--gold-light);
    background:transparent;
  }
  .btn-outline:hover{ background:rgba(212,175,55,0.08); transform:translateY(-2px); }

  /* HEADER */
  header{
    position:fixed; top:0; left:0; right:0; z-index:999;
    background:rgba(11,11,15,0.75);
    backdrop-filter:blur(14px);
    border-bottom:1px solid var(--border);
  }
  nav{
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 24px; max-width:var(--maxw); margin:0 auto;
  }
  .logo{
    font-family:'Playfair Display', serif;
    font-weight:700;
    font-size:22px;
    letter-spacing:1px;
  }
  .logo span{ color:var(--gold); }
  .nav-links{ display:flex; gap:34px; font-weight:500; font-size:15px; }
  .nav-links a{ color:var(--text-muted); transition:color .2s; }
  .nav-links a:hover{ color:var(--gold-light); }
  .nav-cta{ display:flex; align-items:center; gap:16px; }
  .nav-toggle{ display:none; flex-direction:column; gap:5px; cursor:pointer; }
  .nav-toggle span{ width:24px; height:2px; background:var(--text); }

  @media (max-width:860px){
    .nav-links{
      position:absolute; top:100%; left:0; right:0;
      background:var(--bg-alt); flex-direction:column; padding:24px;
      gap:20px; border-bottom:1px solid var(--border);
      display:none;
    }
    .nav-links.open{ display:flex; }
    .nav-toggle{ display:flex; }
    .nav-cta .btn-outline{ display:none; }
  }

  /* HERO */
  .hero{
    position:relative;
    min-height:100vh;
    display:flex;
    align-items:center;
    padding:160px 0 100px;
    background:
      radial-gradient(circle at 20% 20%, rgba(212,175,55,0.12), transparent 40%),
      radial-gradient(circle at 80% 60%, rgba(212,175,55,0.08), transparent 45%),
      var(--bg);
    overflow:hidden;
  }
  .hero::before{
    content:"";
    position:absolute; top:-20%; right:-10%;
    width:600px; height:600px;
    background:radial-gradient(circle, rgba(212,175,55,0.18), transparent 70%);
    filter:blur(40px);
  }
  .hero-inner{ position:relative; z-index:2; max-width:720px; }
  .hero h1{
    font-size:clamp(38px, 5.5vw, 64px);
    font-weight:700;
    line-height:1.1;
    margin-bottom:22px;
  }
  .hero p.lead{
    font-size:18px;
    color:var(--text-muted);
    max-width:560px;
    margin-bottom:36px;
  }
  .hero-ctas{ display:flex; gap:16px; flex-wrap:wrap; margin-bottom:40px; }
  .hero-trust{
    display:flex; gap:28px; flex-wrap:wrap;
    font-size:14px; color:var(--text-muted);
  }
  .hero-trust strong{ color:var(--gold-light); }

  /* TRUST BAR */
  .trustbar{
    background:var(--bg-alt);
    border-top:1px solid var(--border);
    border-bottom:1px solid var(--border);
    padding:26px 0;
  }
  .trustbar .container{
    display:flex; justify-content:space-between; flex-wrap:wrap; gap:20px;
    text-align:center;
  }
  .trustbar .item{ flex:1; min-width:150px; }
  .trustbar .item strong{
    display:block; font-family:'Playfair Display', serif;
    font-size:26px; color:var(--gold-light); margin-bottom:4px;
  }
  .trustbar .item span{ font-size:13px; color:var(--text-muted); }

  /* SECTION GENERIC */
  section{ padding:100px 0; }
  .section-head{ max-width:640px; margin-bottom:56px; }
  .section-head h2{ font-size:clamp(28px,3.5vw,42px); font-weight:700; margin-bottom:16px; }
  .section-head p{ color:var(--text-muted); font-size:16px; }

  /* SERVICES */
  .services-grid{
    display:grid; grid-template-columns:repeat(3, 1fr); gap:24px;
  }
  @media (max-width:860px){ .services-grid{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:560px){ .services-grid{ grid-template-columns:1fr; } }
  .service-card{
    background:var(--bg-card);
    border:1px solid var(--border);
    border-radius:var(--radius);
    padding:32px 26px;
    transition:transform .25s ease, border-color .25s ease;
  }
  .service-card:hover{ transform:translateY(-6px); border-color:var(--gold); }
  .icon-badge{
    width:52px; height:52px; border-radius:50%;
    background:linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05));
    border:1px solid var(--gold);
    display:flex; align-items:center; justify-content:center;
    margin-bottom:20px;
  }
  .icon-badge svg{ width:24px; height:24px; stroke:var(--gold-light); }
  .service-card h3{ font-size:19px; margin-bottom:10px; font-family:'Inter'; font-weight:600; }
  .service-card p{ font-size:14.5px; color:var(--text-muted); }

  /* WHY US / SAM */
  .why-wrap{
    display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center;
  }
  @media (max-width:860px){ .why-wrap{ grid-template-columns:1fr; } }
  .pillars{ display:flex; flex-direction:column; gap:26px; }
  .pillar{ display:flex; gap:16px; }
  .pillar .num{
    font-family:'Playfair Display', serif; font-size:22px; color:var(--gold);
    border:1px solid var(--gold); width:44px; height:44px; border-radius:50%;
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
  }
  .pillar h4{ font-size:17px; margin-bottom:6px; }
  .pillar p{ font-size:14.5px; color:var(--text-muted); }

  .sam-card{
    background:var(--bg-card);
    border:1px solid var(--border);
    border-radius:var(--radius);
    padding:40px;
    position:relative;
  }
  .sam-card::before{
    content:"“"; font-family:'Playfair Display', serif; font-size:80px;
    color:var(--gold); opacity:0.3; position:absolute; top:10px; left:24px;
  }
  .sam-card p{ font-size:17px; color:var(--text); margin-bottom:24px; position:relative; z-index:1; }
  .sam-card .who{ font-size:14px; color:var(--gold-light); font-weight:600; }
  .sam-card .who span{ color:var(--text-muted); font-weight:400; }

  /* PROCESS */
  .process-grid{
    display:grid; grid-template-columns:repeat(4,1fr); gap:24px;
  }
  @media (max-width:860px){ .process-grid{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:560px){ .process-grid{ grid-template-columns:1fr; } }
  .process-step{ text-align:left; }
  .process-step .step-num{
    font-family:'Playfair Display', serif; font-size:38px; color:var(--gold);
    opacity:0.5; margin-bottom:10px;
  }
  .process-step h4{ font-size:17px; margin-bottom:8px; }
  .process-step p{ font-size:14px; color:var(--text-muted); }

  /* TESTIMONIALS */
  .testimonial-grid{
    display:grid; grid-template-columns:repeat(2,1fr); gap:24px;
  }
  @media (max-width:760px){ .testimonial-grid{ grid-template-columns:1fr; } }
  .testimonial-card{
    background:var(--bg-card); border:1px solid var(--border);
    border-radius:var(--radius); padding:30px;
  }
  .stars{ color:var(--gold); font-size:15px; margin-bottom:14px; letter-spacing:2px; }
  .testimonial-card p.quote{ font-size:15.5px; margin-bottom:18px; }
  .testimonial-card .meta{ font-size:13.5px; color:var(--text-muted); }
  .testimonial-card .meta strong{ color:var(--text); }

  /* CTA BAND */
  .cta-band{
    background:linear-gradient(120deg, #1a1405, #2a2210);
    border-radius:var(--radius);
    margin:0 auto;
    max-width:var(--maxw);
    padding:60px 48px;
    display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:24px;
    border:1px solid var(--gold);
  }
  .cta-band h3{ font-size:clamp(22px,3vw,30px); max-width:480px; }
  @media (max-width:760px){ .cta-band{ flex-direction:column; text-align:center; padding:44px 28px; } }

  /* FOOTER */
  footer{ background:var(--bg-alt); border-top:1px solid var(--border); padding:70px 0 30px; }
  .footer-grid{
    display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:40px; margin-bottom:50px;
  }
  @media (max-width:760px){ .footer-grid{ grid-template-columns:1fr; } }
  .footer-grid h4{ font-size:15px; margin-bottom:16px; color:var(--gold-light); }
  .footer-grid p, .footer-grid a{ font-size:14.5px; color:var(--text-muted); display:block; margin-bottom:10px; }
  .footer-grid a:hover{ color:var(--gold-light); }
  .footer-bottom{
    border-top:1px solid var(--border); padding-top:24px;
    display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px;
    font-size:13px; color:var(--text-muted);
  }

  .fade-in{ opacity:0; transform:translateY(20px); transition:opacity .6s ease, transform .6s ease; }
  .fade-in.visible{ opacity:1; transform:translateY(0); }







    CLONESTECH
    


      Services
      Why Us
      Reviews
      Contact
    


    


      Call Now
      


    






    Clones' Trusted Repair Specialists
    

Precision Tech Repair,
Restored to Perfection.


    

From smashed screens to smart intercom systems, Clones Tech Repair delivers premium, honest, same-day device care — done right the first time, every time.


    


      Book Your Repair
      Call the Shop
    


    


      

★★★★★ 5-star rated locally


      

Repairs from 30 minutes


      

Phones · Consoles · Smart Home Systems


    






    

5.0Average Customer Rating


    

30–60 minTypical Turnaround Time


    

100%Honest, No-Overcharge Pricing


    

All AgesPhones, Consoles & Smart Systems






    


      What We Fix
      

One shop. Every device that matters.


      

If it plugs in, connects, or lights up — we've probably already fixed one just like it.


    


    



      


        


        

Screen & Display Repair


        

Cracked, shattered or unresponsive — phone and tablet screens replaced with precision, often while you wait.


      



      


        


        

Battery & Charging Ports


        

Won't hold a charge or won't charge at all? We diagnose and repair batteries and charging ports fast.


      



      


        


        

Console & Gaming Repair


        

Nintendo Switch, PlayStation and Xbox repairs — from charging faults to joystick drift and dock issues.


      



      


        


        

Smart Home & Intercom Systems


        

From door entry systems to smart intercoms that won't connect to your phone — we sort connectivity issues properly, not just patch them.


      



      


        


        

Laptop & Computer Repair


        

Slow, cracked, or acting up — hardware diagnostics and repair for laptops and desktops alike.


      



      


        


        

Water Damage & Diagnostics


        

Dropped it in water? Don't panic. Free diagnosis to assess what's recoverable before any work begins.


      



    






    


      Why Clones Trusts Us
      

Real skill. No nonsense. No overcharging.


    


    


      


        


          

1


          

Genuinely Fast

Most common repairs — screens, charging ports, batteries — are sorted in 30 to 60 minutes, not days.


        


        


          

2


          

Fair, Transparent Pricing

You'll know the cost before we start. No inflated quotes, no surprise add-ons.


        


        


          

3


          

Problems Other Shops Won't Touch

Tricky connectivity issues, smart systems, consoles — if it's electronic, we'll take a proper look.


        


        


          

4


          

A Face You Can Trust

Our customers don't just recommend "the shop" — they ask for Sam by name. That's the standard every repair is held to.


        


      



      


        

"Sam is fantastic at his job. Excellent service, and doesn't charge you over the odds."


        

Dolores Collins — verified customer


      


    






    


      How It Works
      

Simple, honest, fast — from drop-off to fixed.


    


    


      

01

Walk In or Book Ahead

Bring your device by, or reach out to save your spot.


      

02

Free Diagnosis

We identify the issue and give you a clear, honest quote.


      

03

Expert Repair

Most repairs are completed same-day, often within the hour.


      

04

Walk Out Working

Tested, checked, and handed back better than you expected.


    






    


      In Their Words
      

What Clones is saying.


    


    



      


        

★★★★★


        

"Had issues with an intercom system not connecting to phone — these guys had it all sorted in 30 minutes. Great spot, highly recommend."


        

Colm O'Reilly — January 2024


      



      


        

★★★★★


        

"Got a charging port fixed for a Nintendo Switch Lite. Sam was really friendly and sorted my issue with no hassle. Fully recommend."


        

Colm O'Reilly — January 2024


      



      


        

★★★★★


        

"Sam is fantastic at his job. Excellent service, and doesn't charge you over the odds. Highly recommend."


        

Dolores Collins — September 2022


      



      


        

★★★★★


        

"Dropped my phone today, smashed the screen. Took it in and it was repaired better than new within 1 hour! Fabulous service, thank you Sam."


        

Mary Trant — September 2021


      



    






    

Don't live with a broken screen. Get it fixed today.


    


      Call the Shop
      Get a Free Quote
    






    


      


        CLONESTECH
        

Premium, honest device repair in the heart of Clones. Phones, tablets, consoles and smart home systems — fixed fast, fixed right.


      


      


        

Visit / Contact


        

[Shop Address, Clones, Co. Monaghan]


        [Phone Number]
        @clonestech.ie">hello@clonestech.ie</a>
      
      


        

Opening Hours


        

Mon – Fri: [9:00 – 17:30]


        

Saturday: [9:30 – 14:00]


        

Sunday: Closed


        Find Us on Facebook →
      


    
    


      © 2026 Clones Tech Repair. All rights reserved.
      Built on trust, one repair at a time.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fastfix-magic.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/77bc2aac-4402-4894-94ec-db9491ba2a64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

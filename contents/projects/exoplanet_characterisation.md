
<h2>Exoplanet Characterisation</h2>
<h3>2022</h3>
<h3>Skills</h3>
<h6>Applied Physics - Simulations - Astronomy</h6>
<h3>Description and Outcome</h3>

<p> In the summer of 2022, I participated in Harvard's Summer School program. As part of that program, I took a course entitled Astronomy: The Life and Death of Stars. In this class, we explored the beginnings of the universe, the life cycle of stars, and the nature of planet formation. </p>

<p> For my final project, I used publicly available data and software developed by my professor (EXOFASTv2) to model a solar system and verify that there is an exoplanet in it. This is done by analyzing periodic decreases in the detected brightness of the star(s) in the solar system of interest, as these periodic changes are suggestive of something in orbit eclipsing the star. Once a pattern has been identified, the characteristics of these 'transits' can be analysed to determine if the occlusion is caused by an exoplanet, and if so give insight into it's characteristics. </p>

<p>I used this software on system 253990973, which is a binary system (it has two stars). I took the relevant TESS data and used EXOFAST to model it. After I was satisfied with the model EXOFAST provided, I had to interpret the dozens of graphs the program created and use them to determine the characteristics of the planet and its star. This project culminated in a technical report on the process and findings, which is located at the bottom of this page. </p>

<p> The predictions revealed the system is likely to contain an exoplanet, which is very small and tidally locked to the larger star in the system.</p>

<p> The model was then evaluated using several graphs, including the following that shows the calibration between my model of the system and the data TESS collected: </p>

<div class="figure-row">
  <figure>
    <img src="/static/assets/img/sed.png" alt="sed graph">
    <figcaption>
      SED graph from system 253990973, from my report.
    </figcaption>
  </figure>

  <figure>
    <img src="/static/assets/img/mcmc_chain.png" alt="MCMC Chain Graph">
    <figcaption>
      MCMC Chain Graph showing that my model is probable due to the convergence of the lines in the figure (chains)
    </figcaption>
  </figure>
</div>


<iframe 
    src="static/assets/ASTRS41 Final Paper - Abigail Adam.pdf"
    type="application/pdf" 
    width="100%" 
    height="600px" 
    style="border:none;">
</iframe>







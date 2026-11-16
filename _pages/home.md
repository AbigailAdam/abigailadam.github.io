---
title: "About"
layout: homelay
permalink: /
---

<h1 class="home-hero">{{ site.name }}</h1>
<p class="home-hero-sub">{{ site.title }}, {{ site.institution }}</p>

<div class="profile-links">
{% if site.email %}<a href="mailto:{{ site.email }}" class="icon-link" title="Email" aria-label="Email">{% include icon.html name="envelope" %}</a>{% endif %}
{% if site.links.cv and site.links.cv != "" %}<a href="{{ site.links.cv | prepend: '/' | relative_url }}" class="icon-link" title="CV" aria-label="CV">{% include icon.html name="cv" %}</a>{% endif %}
{% if site.links.github and site.links.github != "" %}<a href="{{ site.links.github }}" class="icon-link" title="GitHub" aria-label="GitHub">{% include icon.html name="github" %}</a>{% endif %}
{% if site.links.linkedin and site.links.linkedin != "" %}<a href="{{ site.links.linkedin }}" class="icon-link" title="LinkedIn" aria-label="LinkedIn">{% include icon.html name="linkedin" %}</a>{% endif %}

<!--
{% if site.links.google_scholar and site.links.google_scholar != "" %}<a href="{{ site.links.google_scholar }}" class="icon-link" title="Google Scholar" aria-label="Google Scholar">{% include icon.html name="google-scholar" %}</a>{% endif %}
{% if site.links.researchgate and site.links.researchgate != "" %}<a href="{{ site.links.researchgate }}" class="icon-link" title="ResearchGate" aria-label="ResearchGate">{% include icon.html name="researchgate" %}</a>{% endif %}
{% if site.links.orcid and site.links.orcid != "" %}<a href="{{ site.links.orcid }}" class="icon-link" title="ORCID" aria-label="ORCID">{% include icon.html name="orcid" %}</a>{% endif %}
{% if site.links.twitter and site.links.twitter != "" %}<a href="{{ site.links.twitter }}" class="icon-link" title="Twitter" aria-label="Twitter">{% include icon.html name="x-twitter" %}</a>{% endif %}
-->

</div>

<div class="chip-container" markdown="0">
<a href="{{ '/projects' | relative_url }}" class="chip">Altium</a>
<a href="{{ '/projects' | relative_url }}" class="chip">Applied Physics</a>
<a href="{{ '/projects' | relative_url }}" class="chip">Astronomy</a>
<a href="{{ '/projects' | relative_url }}" class="chip">C/C++</a>
<a href="{{ '/projects' | relative_url }}" class="chip">Git</a>
<a href="{{ '/projects' | relative_url }}" class="chip">Java</a>
<a href="{{ '/projects' | relative_url }}" class="chip">KiCAD</a>
<a href="{{ '/projects' | relative_url }}" class="chip">Linux</a>
<a href="{{ '/projects' | relative_url }}" class="chip">LTspice</a>
<a href="{{ '/projects' | relative_url }}" class="chip">Machine Learning</a>
<a href="{{ '/projects' | relative_url }}" class="chip">MATLAB</a>
<a href="{{ '/projects' | relative_url }}" class="chip">PCB Design</a>
<a href="{{ '/projects' | relative_url }}" class="chip">Python</a>
<a href="{{ '/projects' | relative_url }}" class="chip">ROS</a>


</div>

I am an Engineering Physics student at the University of British Columbia, entering my fourth year. I am currently working as an electrical engineering intern at Lunar Outpust, focusing on the testing and design of complex DC-DC power systems vital to the operations of rovers on the lunar surface.

I am fascinated by problems at the intersection of physics, mathematics, and engineering, and combining theory with practice to solve them. 

<!--
<div class="chip-container" markdown="0">
<a href="{{ 'papers/Abigail_Adam_Resume_S2026 copy.pdf' | relative_url }}" class="chip" target="_blank" rel="noopener">Resume</a>
>



<!-- 
<div class="callout callout-success" markdown="0">
<div class="callout-title">{% include icon.html name="award" class="callout-icon" %} Nobel Prize in Physics, 1965</div>
<p>Awarded the Nobel Prize jointly with Julian Schwinger and Shin'ichiro Tomonaga for fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles.</p>
</div>

<div class="banner-frame" markdown="0">
<img src="{{ '/images/banner.webp' | relative_url }}" alt="Feynman diagrams" width="1400" height="449" loading="lazy">
<div class="banner-caption">Examples of Feynman diagrams. Feynman R., <em>The theory of positrons. Phys. Rev.</em> (1949)</div>
</div>

{% capture selected %}{% bibliography --query @*[selected=true] %}{% endcapture %}
{% if selected contains "pub-entry" %}
## Selected publications

<div class="section-card selected-pubs" markdown="0">
{{ selected }}
<p style="margin: var(--space-4) 0 0;"><a href="{{ '/publications' | relative_url }}">All publications &rarr;</a></p>
</div>
{% endif %}
-->







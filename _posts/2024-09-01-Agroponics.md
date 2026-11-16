---
layout: post
title: "UBC Agroponics"
date: September 2024 - Present
categories: "experience"
math: true
blurb: "Developed and tested hardware and firmware for an automated hydroponic system, using C/C++, Python, ESP32 and RaspberryPi."
image1: images/agroponics_radishes.png
image2: images/agroponics_code.png
image3: images/agroponics_pcb.png
---

<h3>Skills</h3>
Circuit Design · Prototyping · C++ · Python · MQTT · Data Analysis
<h3>Description and Outcome</h3>

I have been a member of the automation subteam of <a href="https://ubcagroponics.com/" target="_blank" title="Agroponics UBC">UBC Agroponics</a> for a year. Agroponics is a design team whose goal is to create an automated hydroponic system that can be monitored remotely. This includes collecting time-series data from various sensors, sending it to a main database, and creating visualisations. We are also creating a control panel other team members can use to alter system parameters (light exposure, the amount of nutrient solution in the water, etc.). 

My role is working on communication between the components of our system. We have several ESP32s used to control the sensors, and a server hosted on a Raspberry Pi. These elements communicate using the MQTT framework, and will be used to both collect sensor data from the hydroponic system and send out instructions to our actuators. Below is a figure of the overarching architecture we are implementing: 

<figure>
<img src="{{ '/images/software_architecture_agro.png' | relative_url }}" alt="software architecture diagram">
<figcaption>
Software architecture diagram for server and communication between devices
</figcaption>
</figure>


I also work directly with the sensors. This involves writing C++ code that collects the data, designing calibration procedures, and prototyping the associated circuits. These sensors measure the following parameters: 

- pH level
- Electrical conductivity (EC)
- Water temperature
- Ambient humidity and temperature
- Water level
- Turbidity
- Flow rate

<figure>
<img src="{{ 'images/esp diagram.png' | relative_url }}" alt="esp connection diagram" >
<figcaption>
Circuit/Connection diagram for our control ESP (ESP32 (a) in the figure above)
</figcaption>
</figure>
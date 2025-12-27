# ENPH 253 Robot
## 2025

### Skills
###### ROS · OpenCV · Machine Learning

### Description and Outcome

This project was completed for ENPH 353. In this course, students form teams to build autonomous robots that participate in a competition simulated in Gazebo. The [2025 Competition](https://projectlab.engphys.ubc.ca/enph-353/) involved the robots navigating a complex course while finding and processing clues to solve a fictitious crime. The publication of these clues to a specific ROS topic is how robots recieve points in the competition.  

These robots operated based on input from two cameras and several LiDARs. The camera input is the most important to the detection and processing of the clues, as they are located on boards placed throughout the course. The robot's decision making is based on a finite state machine which uses the clueboard detections to transition between neural networks trained to drive each section of the course using imitation learning. 

My responsibilities focused on the clue recognition module of the robot. This involved designing ROS nodes that took in images from the camera, identified if they could contain a clueboard, and if they did read the text it contained.

The identification of clueboards was done using a mix of image processing checks and input from the lidar, which searched for regions of linearly increasing distance that are indicative of flat surfaces. 

The reading was done using a convolutional neural network (CNN) trained using Google Colab. For further details, see the technical report detailing the design and execution of the robot:

<iframe 
    src="static/assets/Team_18_ENPH_353_Final_Report.pdf"
    type="application/pdf" 
    width="100%" 
    height="600px" 
    style="border:none;">
</iframe>



# Physis

***Etymology:***
*Physis (Greek: φύσις phusis) is the primeval goddess of nature
in ancient Greek mythology. It is a Greek theological, philosophical,
and scientific term usually translated into English as "nature".*


## What are we planning to build? How does it work?

Physis is an application that will give the user smart insights on predicted upcoming natural disasters in their current location or any location of their choice. They can also configure it to alert them before any specific predicted natural disaster happens, so they can take precautions long before it happens. Based on the type of natural disaster, it will also guide them what precautionary measures they need to take and what they need to do when the disaster hits. And in case an unexpected natural disaster is going to hit soon, which Physis can detect if the chance of that natural disaster increases, it will automatically alert and guide them about the disaster even if the user hasn’t opened the application from day 0 of installing it. This is done for the safety of our users. So, apparently, even a person who doesn’t know how to use the application can get alerts and warnings before something bad happens. So that he can take precautions and stay safe.

Families and friends can create a “close group” in the application, which will send insights to all the group members about the predicted upcoming natural disasters nearby each other. This will help them keep tabs on each other if any natural disaster is about to come. If someone in the group gets caught up in a natural disaster, this will also send out alerts and notifications to every group member with their last known location (if the current location can’t be fetched) so that they can get help or relief.


## How do we collect the data? What datasets are we using?

It collects the data about the upcoming natural disasters using the PredictHQ API. It provides us data about verified real-world events which it collects from hundreds of sources like commercial datasets, validated open datasets, curated data, partner enrichment, news media and user generated data. It calculates and provides ranks for events that helps us cut through the noise and understand the potential impact of events and allows us to focus on what’s more important - to give insights to our users, alert and notify them about predicted natural disasters and keep them safe. It removes the headache of extra work with multiple datasets of unstructured data so that we can focus on our application and make sure people benefit from it.


## What technologies are we using?

Physis will use a Node.js backend (we were planning to use a Python/GoLang backend, but choose to use Node.js as it’ll be easier and time saving for everyone to shift back and forth from server-side to client-side) and a React frontend. It will be made into a cross-platform mobile application using React Native (yeah, again, we’re not using native applications because it’ll help us save time and make it easy to develop to use a single common language). We’re also planning to create applications for Apple Watch and Android Wear devices which can help people more easily as they are more likely to carry around their wearable devices than their mobile devices (these will be native applications of course). 

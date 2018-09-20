# Watson Chat Bot for TMF using OpenWhisk

[![Build Status](https://travis-ci.org/watson-developer-cloud/text-bot-openwhisk.svg?branch=master)](https://travis-ci.org/watson-developer-cloud/text-bot-openwhisk) [![codecov](https://codecov.io/gh/watson-developer-cloud/text-bot-openwhisk/branch/master/graph/badge.svg)](https://codecov.io/gh/watson-developer-cloud/text-bot-openwhisk)


This project was created a sample project to showcase during TMForums. uses NodeJS and Watson Assistant in order create a Chat Bot. It is run with IBM Functions(OpenWhisk) in order to pull TMForums Trouble Ticketing API's. 
The Application uses the chat bot to query APIs  via IBM Functions within a chat bot in order to pull the ticket status. 

This project is intended to be deployed on a Container. 
The full project is a sandbox project which includes, NodeJS, NodeRed, Openwhisk, MongoDB, and MQTT. 

The node.yaml file is located in the kubernetes folder. This can be used to create a container in order with all the required images for this project. 




[OpenWhisk](https://console.bluemix.net/openwhisk/).

To see a list of IBM Services, visit here: https://console.bluemix.net/catalog/

## The Architecture
![**Architecture**](readme_images/Arch.png)


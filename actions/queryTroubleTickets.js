#
#
# main() will be run when you invoke this action
#
# @param Cloud Functions actions accept a single parameter, which must be a JSON object.
#
# @return The output of this action, which must be a JSON object.
#
#
import sys
import requests

def main(dict):
    counter = 0
    response = requests.get('https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/0bdf84423da86373f2c691fb54a3519011d66c7749ea39eebb7e540c91d0fbc8/f551f95b-84c5-4ae1-928c-881e2f36b937/')
    for item in response.json():
        if item["severity"] == dict['severity'].title():
            counter+=1
    return { 'tickets':len(response.json()),'count': counter }

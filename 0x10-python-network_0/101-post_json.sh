#!/bin/bash
# Write a Bash script that sends a JSON POST request to a URL passed as the first argument, and displays the body of the response.
curl -sfL "$1" -X POST
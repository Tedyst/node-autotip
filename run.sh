#!/bin/bash
while true; 
    do npm start; 
    test $? -gt 128 && break; 
done
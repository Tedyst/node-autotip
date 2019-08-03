#!/bin/bash
while [ 1 ]; 
    do npm start; 
    test $? -gt 128 && break; 
done
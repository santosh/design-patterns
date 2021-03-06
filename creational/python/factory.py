#!/usr/bin/env python
# -*- coding: utf-8 -*-

# object creation
class Dog:
    def __init__(self, name):
        super(self.__class__, self).__init__()
        self.name = name
        
    def speak(self):
        return "Bhoow!"

class Cat:
    def __init__(self, name):
        super(self.__class__, self).__init__()
        self.name = name
        
    def speak(self):
        return "Meaaww"

def get_pet(pet="dog"):
    """The factory method"""

    pets = dict(dog=Dog("Hope"), cat=Cat("Jenni"))

    return pets[pet]

d = get_pet("cat")

print(d.speak())

#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Dog:
    """One of the objects to be returned."""

    def speak(self):
        return "Bhooow!"

    def __str__(self):
        return "Dog"


class DogFactory:
    """Concrete factory."""

    def get_pet(self):
        """Returns the Dog object."""
        return Dog()

    def get_food(self):
        """Returns the Dog Food object."""
        return "Dog Food"


class PetStore:
    """PetStore houses our Abstract Factory"""

    def __init__(self, pet_factory=None):
        """pet_factory is our abstract factory"""
        self._pet_factory = pet_factory

    def show_pet(self):
        """Utility methods to display the details of the objects
        returned by the DogFactory."""
        pet = self._pet_factory.get_pet()
        pet_food = self._pet_factory.get_food()

        print("Our pet is '{}'".format(pet))
        print("Our pet says hello by '{}'".format(pet.speak()))
        print("Its food is '{}'".format(pet_food))


factory = DogFactory()

shop = PetStore(factory)

shop.show_pet()

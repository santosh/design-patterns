class Dog:
    def speak(self):
        return "Bhoow!"


class Cat:
    def speak(self):
        return "Meaaww"


class PetFactory:
    def get_pet(self, pet="dog"):
        """The factory method"""

        if pet == "dog":
            return Dog()
        elif pet == "cat":
            return Cat()


if __name__ == "__main__":
    pf = PetFactory()

    c = pf.get_pet("cat")
    d = pf.get_pet("dog")

    print(c.speak())
    print(d.speak())

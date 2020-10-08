class Cat:
    def __init__(self, color, name):
        self.color = color
        self.name = name

layla = Cat("tabby", "Layla")

apollo = Cat("black", "Apollo")

print(layla.name)

print(apollo.color)

apollo.color = "gold"

print (apollo.color)
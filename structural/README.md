# List of Structural Patterns

List of Structural Patterns:

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

## Adapter

Intent: Convert the interface of a class into another clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

## Proxy

Intent: Provide a surrogate or placeholder for another object to control access to it. 

A proxy is an object that control access to another object. The main motivation from the design pattern has to do with the expensive object. Instead of working directly with an object that require a lot of resources, you can work with a proxy. An object that has exact same interface. But a proxy can delay instantiation of an object. 

## Composite

Intent: Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

We want to perform same operation on individual element as we would on a group of elements. E.g. you could eat a grape, and if you are hungry enough, you would eat a bunch of grapes. 

In composites, the interface should be same as the each element. If each element has `print` method attached to them, the composite of them should also have same interface.

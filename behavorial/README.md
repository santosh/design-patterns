# List of Behavioral Patterns

## Observer Pattern

Came to know about this pattern when reading The Pragmatic Programmer. Software and protocols like AMQP uses this in their pub/sub model. This pattern is how you can make your objects decoupled and only make communication between them using **events**. One object can communicate to another only when they are subscribed to them. A subscriber can only subscribe to specific topic if they want. 

The Observer pattern suggests that you add a subscripiton mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher. This mechanism consists of: 1) an array field for storing a list of references to subscribers objects. 2) several public methods which allow adding subscribers to and removing them from that list. 

Subscription list is dynamic, so subscribers can join or leave the list whenever they need to. 

### Example

In the e-commerce website, items go out of stock from time to time. There can be customers who are interested in a particular item that went out of stock. There are three solutions to this problem: 

1. The customer keeps checking the availability of the item at some frequency. 
2. E-commerce bombards customers with all new items available, which are in stock. 
3. The customer subscribes only to the particular item he is interested in and gets notified if the item is available. Also, multiple customers can subscribe to the same product. 

Option 3 is most viable, and this is what the Observer pattern is all about. The major components of the observer pattern are:

- Subject, the instance which publishes an event when anything happens. 
- Observer, which subscribes to the subject events and gets notified when they happen. 

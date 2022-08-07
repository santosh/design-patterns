package main

import "fmt"

type IPizza interface {
	getPrice() int
}

type VeggeMania struct {
}

func (p *VeggeMania) getPrice() int {
	return 15
}

type TomatoTopping struct {
	pizza IPizza
}

func (c *TomatoTopping) getPrice() int {
	pizzaPrice := c.pizza.getPrice()
	return pizzaPrice + 7
}

type CheeseTopping struct {
	pizza IPizza
}

func (c *CheeseTopping) getPrice() int {
	pizzaPrice := c.pizza.getPrice()
	return pizzaPrice + 10
}

func main() {
	pizza := &VeggeMania{}

	// Add cheese topping
	pizzaWithCheese := &CheeseTopping{
		pizza: pizza,
	}

	// Add tomato topping
	pizzaWithCheeseAndTomato := &TomatoTopping{
		pizza: pizzaWithCheese,
	}

	// Add extra cheese
	pizzaWithExtraCheese := &CheeseTopping{
		pizza: pizzaWithCheeseAndTomato,
	}

	fmt.Printf("Price of veggeMania with tomato and extra cheese topping is %d\n", pizzaWithExtraCheese.getPrice())
}

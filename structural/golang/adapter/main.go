package main

import "fmt"

type computer interface {
	insertInSquarePort()
}

type mac struct {
}

func (m *mac) insertInSquarePort() {
	fmt.Println("Insert square port into mac machine")
}

type windows struct{}

func (w *windows) insertInCirclePort() {
	fmt.Println("Insert circle port into windows machine")
}

type windowsAdapter struct {
	windowMahcine *windows
}

func (w *windowsAdapter) insertInSquarePort() {
	w.windowMahcine.insertInCirclePort()
}

type client struct{}

func (c *client) insertSquareUsbInComputer(com computer) {
	com.insertInSquarePort()
}

func main() {
	client := &client{}
	mac := &mac{}

	client.insertSquareUsbInComputer(mac)
	windowsMachine := &windows{}
	windowsMachineAdapter := &windowsAdapter{
		windowMahcine: windowsMachine,
	}
	client.insertSquareUsbInComputer(windowsMachineAdapter)
}

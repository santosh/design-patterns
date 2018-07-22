#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Borg:
    """Borg class making class attributes global."""
    _shared_state = {}
    
    def __init__(self):
        self.__dict__ = self._shared_state

class Singleton(Borg):
    """This class now shares all its attributes among its various instances."""
    def __init__(self, **kwargs):
        super(self.__class__, self).__init__()
        self._shared_state.update(kwargs)
        
    def __str__(self):
        return str(self._shared_state)

x = Singleton(HTTP="Hypertext Text Transfer Protocol")

print(x)

y = Singleton(SNMP="Simple Network Management Protocol")

print(y)

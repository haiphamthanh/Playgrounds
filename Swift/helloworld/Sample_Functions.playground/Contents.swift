import UIKit

// Type Constraint Syntax
func typeConstraintSample<T: SomeClass, U: SomeProtocol>(someT: T, someU: U) {
	// function body goes here
	return someU.show()
}

class SomeClass {
}

protocol SomeProtocol {
	func show()
}

class Value1Class: SomeProtocol {
	func show() {
		print("Sample 1")
	}
}

class Value2Class: SomeProtocol {
	func show() {
		print("Sample 2")
	}
}

struct Value4Struct: SomeProtocol {
	func show() {
		print("Struct 4")
	}
}

// Type Constraints in Action
func findIndex<T: Equatable>(of valueToFind: T, in array:[T]) -> Int? {
	for (index, value) in array.enumerated() {
		if value == valueToFind {
			return index
		}
	}
	return nil
}

struct Human {
	let name: String
}

extension Human: Equatable {
	static func == (lhs: Human, rhs: Human) -> Bool {
		return lhs.name == rhs.name
	}
}

// Associated Types in Action
protocol Container {
	associatedtype Item
	mutating func append(_ item: Item)
	var count: Int { get }
	subscript(i: Int) -> Item? { get }
}

// Using a Protocol in Its Associated Type’s Constraints
// Generic Where Clauses
// Extensions with a Generic Where Clause
// Contextual Where Clauses
// Associated Types with a Generic Where Clause

struct SampleContainer<T>: Container {
	typealias Item = T
	
	private var array = [Item]()
	mutating func append(_ item: Item) {
		return array.append(item)
	}
	
	var count: Int {
		return array.count
	}
	
	subscript(i: Int) -> Item? {
		return array.last
	}
}

func main() {
	// Type Constraint Syntax
	let value = SomeClass()
	
	let other1 = Value1Class()
	let other2 = Value2Class()
	let other4 = Value4Struct()
	
	typeConstraintSample(someT: value, someU: other1)
	typeConstraintSample(someT: value, someU: other2)
	typeConstraintSample(someT: value, someU: other4)
	
	// Type Constraints in Action
	let doubleIndex = findIndex(of: 9.3, in: [3.14159, 0.1, 0.25])
	// doubleIndex is an optional Int with no value, because 9.3 isn't in the array
	print("\(doubleIndex)")
	let stringIndex = findIndex(of: "Andrea", in: ["Mike", "Malcolm", "Andrea"])
	// stringIndex is an optional Int containing a value of 2
	print("\(stringIndex)")
	
	let humans = [Human(name: "Mike"), Human(name: "Malcolm"), Human(name: "Andrea")]
	let humanIndex = findIndex(of: Human(name: "Andrea"), in: humans)
	print("\(humanIndex)")
	
	// Associated Types in Action
	var sampleContainer = SampleContainer<Double>()
	sampleContainer.append(1.0)
	sampleContainer.append(2)
	sampleContainer.append(3)
	
	print("\(sampleContainer.count)")
}

extension Thread {
	class func printCurrent(queue: DispatchQueue) {
		print("\r⚡️: \(Thread.current)\r" + "🏭: \(queue.label)\r")
	}
	
	class func printCurrent() {
		print("\r⚡️: \(Thread.current)\r" + "🏭: \(OperationQueue.current?.underlyingQueue?.label ?? "None")\r")
	}
	
	var threadName: String {
		if let currentOperationQueue = OperationQueue.current?.name {
			return "OperationQueue: \(currentOperationQueue)"
		} else if let underlyingDispatchQueue = OperationQueue.current?.underlyingQueue?.label {
			return "DispatchQueue: \(underlyingDispatchQueue)"
		} else {
			let name = __dispatch_queue_get_label(nil)
			return String(cString: name, encoding: .utf8) ?? Thread.current.description
		}
	}
}

//main()

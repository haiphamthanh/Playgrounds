
//var array = ["0", "1"]
//func check(array: [String]) {
//	let a = array[0]
//	array[0] = array[1]
//	array[1] = a
//
//	array.append("3")
//}


//class Sample {
//	var value = 10
//}
//func checkRefference() {
//	var a = Sample()
//	a.value = 100
//
//	let b = a
//	a.value = 1000
//
//	print(b.value)
//
//	a = Sample()
//
//	print(a.value)
//	print(b.value)
//}

//class Person: NSObject, NSCoding {
//	func encode(with aCoder: NSCoder) {
//		aCoder.encode(name, forKey: Key.name.rawValue)
//		aCoder.encode(age, forKey: Key.age.rawValue)
//	}
//
//	required init?(coder aDecoder: NSCoder) {
//		name = aDecoder.decodeObject(forKey: Key.name.rawValue) as? String ?? ""
//		age = aDecoder.decodeInteger(forKey: Key.age.rawValue)
//	}
//
//	var name: String
//	var age: Int
//
//	init(name: String, age: Int) {
//		self.name = name
//		self.age = age
//	}
//
//	enum Key: String {
//		case name
//		case age
//	}
//}

//import UIKit
//class sampleVC: UIViewController {
//	let person: Person
//	required init?(coder aDecoder: NSCoder) {
//		if let decodedPerson = try? NSKeyedUnarchiver.unarchiveTopLevelObjectWithData(savedData) as? Person {
//			let person = decodedPerson
//			print(person.name)
//		}
//
//	}
//}
//
//class Person: NSCoder, NSCoding {
//	func encode(with aCoder: NSCoder) {
//		aCoder.encode(name, forKey: Key.name.rawValue)
//		aCoder.encode(age, forKey: Key.age.rawValue)
//	}
//
//	required init?(coder aDecoder: NSCoder) {
//		name = aDecoder.decodeObject(forKey: Key.name.rawValue) as? String ?? ""
//		age = aDecoder.decodeInteger(forKey: Key.age.rawValue)
//	}
//
//	var name: String
//	var age: Int
//
//	init(name: String, age: Int) {
//		self.name = name
//		self.age = age
//	}
//
//	enum Key: String {
//		case name
//		case age
//	}
//}

protocol Notify {
	func send(mssg: String)
}

protocol Authorize {
	func isAuth()
}

class ConcreateNotify: Notify {
	func send(mssg: String) {
		print("Send normal")
	}
}

class NotifyDecorator: Notify {
	private let notify: Notify
	init(notify: Notify) {
		self.notify = notify
	}
	
	func send(mssg: String) {
		notify.send(mssg: mssg)
	}
}

class FBNotifyDecorator: NotifyDecorator {
	override func send(mssg: String) {
		super.send(mssg: mssg)
		
		print("FB Send notify")
	}
}

class SMSNotifyDecorator: NotifyDecorator {
	override func send(mssg: String) {
		super.send(mssg: mssg)
		
		print("SMS Send notify")
	}
}



func main() {
	let simple = ConcreateNotify()
	
	let fb = FBNotifyDecorator(notify: simple)
	let sms = SMSNotifyDecorator(notify: fb)
	sms.send(mssg: "Hello")
	
	let listNoties = [ConcreateNotify(),
	ConcreateNotify(),
	ConcreateNotify()]
	
	for notify in listNoties {
		notify.send(mssg: "Hello")
	}
//	square.tinhChuvi()
	
//	let coder = NSCoder()
//	let vc = sampleVC(coder: T##NSCoder)
//	let person = Person(name: "Viblo", age: 2)
//	if let data = try? NSKeyedArchiver.archivedData(withRootObject: person, requiringSecureCoding: false) {
//		UserDefaults.standard.set(data, forKey: "data")
//	}
//
//	if let savedData = UserDefaults.standard.object(forKey: "data") as? Data {
//		if let decodedPerson = try? NSKeyedUnarchiver.unarchiveTopLevelObjectWithData(savedData) as? Person {
//			let person = decodedPerson
//			print(person.name)
//		}
//	}
//
//	if let data = try? NSKeyedArchiver.archivedData(withRootObject: person, requiringSecureCoding: false) {
////		UserDefaults.standard.set(data, forKey: "data")
//		let vc = sampleVC(coder: SampleCoder())
//		print(vc)
//	}
	
//	let person = Person(name: "Viblo", age: 2)
//	let vc = sampleVC(coder: person)
//	print(vc)
	
}

main()

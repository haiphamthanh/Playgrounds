//class DemoSync {
//    static let sharedInstance = DemoSync()
//    private var logs = [String]()
//    init() {
//        test()
//    }
//    public func addLog (entry : String ) {
//        self.logs.append(entry)
//    }
//    public func getLogs() -> [String] {
//        return self.logs
//    }
//    func test() {
//        //Priority
//        let queueConcurrentTest =  DispatchQueue.(label: "testQueue", qos: .userInitiated)
//        for i in 0 ..< 100 {
//            queueConcurrentTest.async {
//                DemoSync.sharedInstance.addLog(entry: "log:\(i)")
//            }
//        }
//        let logs = DemoSync.sharedInstance.getLogs()
//        for log in logs {
//            print("DemoSync : \(log)")
//        }
//    }
//}

func showCartesian(array: Array<Int>, from: Int) {
	let result = array * array
	
	var count = 0
	let iter = result.makeIterator()
	while let res = iter.next() {
		print("\(res)")
		count += 1
	}
	
	print("Number of Cartesian (A * A): \(array.count) * \(array.count) = \(count)")
}

func *<T1:Sequence, T2:Sequence>(lhs: T1,rhs : T2) -> AnySequence<(T1.Iterator.Element,T2.Iterator.Element)>
{
	return AnySequence (
		lhs.lazy.flatMap { x in rhs.lazy.map { y in (x,y) }}
	)
}

func showAllSubset(array: Array<Int>) {
	let result = array.powerset
	
	var count = 0
	var iter = result.makeIterator()
	while let res = iter.next() {
		print("\(res)")
		count += 1
	}
	
	print("Number of Subset (2^n): 2^\(array.count) = \(count)")
}

extension Array {
	var powerset: [[Element]] {
		guard count > 0 else {
			return [[]]
		}
		
		// tail contains the whole array BUT the first element
		let tail = Array(self[1..<endIndex])
		
		// head contains only the first element
		let head = self[0]
		
		// computing the tail's powerset
		let withoutHead = tail.powerset
		
		// mergin the head with the tail's powerset
		let withHead = withoutHead.map { $0 + [head] }
		
		// returning the tail's powerset and the just computed withHead array
		return withHead + withoutHead
	}
}

func main() {
    let array = [1, 2, 3]
	
	print("---------- We have array A = \(array) ==> Number of value in array = count(A) = \(array.count) ----------\n")
	
	
	showCartesian(array: array, from: 0)
	
	print("\n")
	
	showAllSubset(array: array)
}

main()

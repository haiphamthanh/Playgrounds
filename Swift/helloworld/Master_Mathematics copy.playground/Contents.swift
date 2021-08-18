import Foundation

func findGAP(origin: Int, toOringin: Int) {
	// 9073741924 ---- 16777215 ---- 9073741924
	var value: Int = 549755813888
	while true {
		
		// 9073842924 ---- 16787215 ---- 9073742924
		if value >= 549757813888 {
			break
		}
		
		let floatNumber = Float32(value)
	
		let abc = value - Int(floatNumber)
		if abc != 0 {
			print("Int=\(value) Float =\(floatNumber) Gap = \(abc)")
		}
		
		value += 1
	}
}

func main() {
	// 9073741924 ---- 9073842924
	// 16777215 ---- 16787215
	// 9073741924 ---- 9073742924
	// 549755813888 ---- 549757813888
	findGAP(origin: 549755813888, toOringin: 549757813888)
}
main()

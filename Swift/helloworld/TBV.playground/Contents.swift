import UIKit
import Foundation

// Type Constraint Syntax
func sample() {
    
//    let dateString = "21/07/14"
//
//    let dateFormatterGet = DateFormatter()
////    dateFormatterGet.dateFormat = "yyyy-MM-dd HH:mm:ss"
//    dateFormatterGet.dateFormat = "yy/MM/dd"
//
//    let dateFormatterPrint = DateFormatter()
//    dateFormatterPrint.dateFormat = "yy/MM/dd"
//
//
//    if let date = dateFormatterGet.date(from: dateString) {
//        print(dateFormatterPrint.string(from: date))
//    } else {
//       print("There was an error decoding the string")
//    }
//    let now = Date()
//    let soon = Date().addingTimeInterval(5000)
//    print(now)
//    print(soon)
//
//    let date = Calendar.current.dateComponents([.day, .month, .year], from: Date()).hour
//    print(date)
    
    // "Sep 23, 2015, 10:26 AM"
    let getDate = Date(timeIntervalSinceNow: 10000)
    
    let now = Date()
    
    var order = Calendar.current.compare(getDate, to: now, toGranularity: .day)
    
    switch order {
    case .orderedDescending:
        print("Ngay 1 lon hon bay gio")
    case .orderedAscending:
        print("Ngay 1 nho hon bay gio")
    case .orderedSame:
        print("Cung ngay")
    }

}

sample()
//main()

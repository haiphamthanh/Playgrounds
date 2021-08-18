#include <iostream>
#include <cmath> /* Để sử dụng hàm tính căn sqrt() */

using namespace std;

class Shape
{
    public:
        virtual void printArea() = 0;
        ~Shape();
};

class Rectangle: public Shape
{
    private:
        double width, height;
    public:
        Rectangle(double _width, double _height) /* Constructor */
        {
            width = _width;
            height = _height;
        }

        void printArea()
        {
            cout << width * height << '\n';
        }
};

class Circle: public Shape
{
    private:
        double radius;

    public:
        Circle(double _radius) /* Constructor */
        {
            radius = _radius;
        }

        void printArea()
        {
            cout << radius * radius * 3.14 << '\n';
        }
};

class Triangle: public Shape
{
    private:
        double a, b, c;

    public:
        Triangle(double _a, double _b, double _c) /* Constructor */
        {
            a = _a; b = _b; c = _c;
        }

        void printArea()
        {
            double p = (a + b + c) / 2;
            cout << sqrt(p * (p - a) * (p - b) * (p - c)) << '\n'; /* Công thức Heron */
        }
};

Shape *allShape[] = {
    new Rectangle(3, 4),
    new Circle(1),
    new Triangle(3, 4, 5)
};
int n = 3; /* Số lượng phần tử trong mảng */

int main()
{
    for (int i = 0; i < n; i ++)
        allShape[i]->printArea();
    return 0;
}
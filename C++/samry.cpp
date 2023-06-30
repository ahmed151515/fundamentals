#include <iostream>
#include <sstream>
#include <string>

int main()
{
  int number = 12345;

  // إنشاء كائن std::stringstream
  std::stringstream ss;

  // تحويل الرقم إلى نص باستخدام std::stringstream
  ss << number;

  // استخراج النص من std::stringstream
  std::string text = ss.str();

  std::cout << "Number as text: " << text << std::endl;

  return 0;
}

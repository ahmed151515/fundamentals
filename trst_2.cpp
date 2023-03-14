#include <iostream>
#include <iomanip>
#include <string>
using namespace std;
int main()
{ // Variables
  string movieName;
  double adultTicketPrice;
  double childTicketPrice;
  int noOfAdultTicketsSold;
  int noOfChildTicketsSold;
  int NumberofTicketsSold;
  double percentDonation;
  double grossAmount;
  double amountDonated;
  double netSaleAmount;
//   // inputs 
  cout<<"write movie name\n";
  getline(cin, movieName);
  cout<<"write price of an adult ticket price\n";
cin>>adultTicketPrice;
  cout<<"write price of a child ticket price\n";
cin>>childTicketPrice;
  cout<<"write number of adult tickets sold\n";
cin>>noOfAdultTicketsSold;
  cout<<"write number of child tickets sold\n";
cin>>noOfChildTicketsSold;
  cout<<"write percentage of the gross to be donated\n";
cin>>percentDonation;
// // Processing 
  NumberofTicketsSold=noOfAdultTicketsSold+noOfChildTicketsSold;
  //-------------
  grossAmount = adultTicketPrice *
  noOfAdultTicketsSold +
  childTicketPrice *
  noOfChildTicketsSold;
  //-------------
  amountDonated = grossAmount *
  percentDonation / 100;
  //-------------
  netSaleAmount = grossAmount - amountDonated;
// outputs
  cout << "-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n";
  cout<<setfill('.')<<setw(35)<<left<<"Movie Name:"<<" "<<movieName<<"\n";
  cout<<setfill('.')<<setw(35)<<left<<"Number of Tickets Sold:"<<" "<<NumberofTicketsSold<<"\n";
  cout<<setfill('.')<<setw(35)<<left<<"Gross Amount:"<<" $ "<<fixed<<setprecision(2)<<grossAmount<<"\n";
  cout<<setfill('.')<<setw(35)<<left<<"Percentage of Gross Amount Donated:"<<"     "<<fixed<<setprecision(2)<<percentDonation<<"%\n";
  cout<<setfill('.')<<setw(35)<<left<<"Amount Donated:"<<" $ "<<fixed<<setprecision(2)<<amountDonated<<"\n";
  cout<<setfill('.')<<setw(35)<<left<<"Net Sale:"<<" $ "<<fixed<<setprecision(2)<<netSaleAmount<<"\n";
  return 0;
}

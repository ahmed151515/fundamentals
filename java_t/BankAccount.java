package java_t;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
public class BankAccount {
    private int ID;
    private String name;
    public String address;
    private Date date_of_birth;
    protected double amount;
    public BankAccount()
    {
        ID = 0;
        name = null;
        address = null;
        date_of_birth = null;
        amount = 0;
    }
    public BankAccount(BankAccount copy)
    {
        ID = copy.getID();
        name = copy.getName();
        address = copy.address;
        date_of_birth = copy.getDate_of_birth();
        amount = copy.getAmount();
    }
    public int getID()
    {
        return ID;
    }

    public void setID(int ID)
    {
        this.ID = ID;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Date getDate_of_birth()
    {
        return date_of_birth;
    }

    public void setDate_of_birth(Date Date_of_birth)
    {
        this.date_of_birth = Date_of_birth;
    }

    public double getAmount()
    {
        return amount;
    }

    public void setAmount(double amount)
    {
        this.amount = amount;
    }
    public void insert() throws ParseException
    {
        Scanner in = new Scanner(System.in);

        System.out.print("enter name: ");
        name = in.next();
        System.out.print("enter ID: ");
        ID = in.nextInt();
        System.out.print("enter Birth date (dd-MM-yyyy): ");
        String date = in.next();
        SimpleDateFormat date_f = new SimpleDateFormat("dd-MM-yyyy");
        date_of_birth = date_f.parse(date);
        System.out.print("enter address: ");
        address = in.next();
    }
    public void print()
    {
        Scanner in = new Scanner(System.in);

        System.out.println("name: " + name);
        System.out.println("ID: " + ID);
        SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
        System.out.println("Birth date: " + format.format(date_of_birth));
        System.out.println("address: " + address);
    }
//    public static void main(String[] args) throws ParseException
//    {
//        BankAccount ahmed = new BankAccount();
//        ahmed.insert();
//        BankAccount obj = new BankAccount(ahmed);
//        System.out.println("----form obj----");
//        obj.print();
//
//    }

    @Override
    public String toString()
    {
        return "BankAccount{" + "ID=" + ID + ", name=" + name + ", address=" + address + ", date_of_birth=" + date_of_birth + ", amount=" + amount + '}';
    }



}

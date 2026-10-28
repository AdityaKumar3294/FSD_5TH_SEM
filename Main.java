
class BankAccount {
    String accountName;
    long accountNumber;
    double balance;
    BankAccount(String name, long number, double balance) {
        this.accountName = name;
        this.accountNumber = number;
        this.balance = balance;
    }
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance or invalid amount");
        }
    }
    void checkBalance() {
        System.out.println("Account Holder: " + accountName);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: " + balance);
    }
}

class SavingsAccount extends BankAccount {
    SavingsAccount(String name, long number, double balance) {
        super(name, number, balance);
    }
    void addInterest() {
        double interest = balance * 0.04;
        balance += interest;
        System.out.println("Interest added: " + interest);
    }
}

class CurrentAccount extends BankAccount {
    CurrentAccount(String name, long number, double balance) {
        super(name, number, balance);
    }
    void addInterest() {
        double interest = balance * 0.02; 
        balance += interest;
        System.out.println("Interest added: " + interest);
    }
}

public class Main {
    public static void main(String[] args) {
        SavingsAccount savings =
            new SavingsAccount("Aditya", 12345, 10000);

        System.out.println("--- Savings Account ---");
        savings.deposit(2000);
        savings.withdraw(1000);
        savings.addInterest();
        savings.checkBalance();

        CurrentAccount current =
            new CurrentAccount("Rahul", 67890, 20000);

        System.out.println("\n--- Current Account ---");
        current.deposit(5000);
        current.withdraw(3000);
        current.addInterest();
        current.checkBalance();
    }
}
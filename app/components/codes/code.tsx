/* eslint-disable */
export const assignment1 = `package study;
import java.util.Scanner;
public class Main {
    private static int num1, num2, num3;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        num1 = sc.nextInt();
        num2 = sc.nextInt();
        num3 = sc.nextInt();

        int max;
        
        max = (num1 > num2) ? num1 : num2;
        max = (max > num3) ? max : num3;

        System.out.println("최댓값 : " + max);

    }
}
`;
export const assignment2 = `package week2;

public class hw2 {
    public static void main(String[] args) {
        //문제 1
        Car car = new Car("소나타","123",50,100,32.3,21.2);
        System.out.println(car);

        //문제2
        People[] people = {
                new People("유동연",24,174),
                new People("허종구",23,180),
                new People("표준성",20,180)
        };

        for (int i = 0; i < 3; i++) {
            System.out.println(people[i]);
        }

        //문제3
        Card[] cards = new Card[100];
        for (Card card : cards) {
            card = new Card();
        }

        //문제4
        Book book1 = new Book("양병현",2023,"정시템");
        Book book2 = new Book("정유경");
        Book book3 = new Book("양병현",2022);

        System.out.println(book1);
        System.out.println(book2);
        System.out.println(book3);

        //문제5
        Account account = new Account("유동연","1",10000);
        System.out.println("5000원 입금");
        account.deposit(5000);
        System.out.println(account.getBalance());
        System.out.println("5000원 출금");
        account.withdraw(5000);
        System.out.println(account.getBalance());
    }
}`;
export const assignment3 = `package week2;

public class Account {
    private String name;
    private String num;
    private int money;

    public Account(String name, String num, int money) {
        this.name = name;
        this.num = num;
        this.money = money;
    }

    public int getBalance() {
        return money;
    }

    public void deposit(int money) {
        this.money += money;
    }

    public void withdraw(int money) {
        this.money -= money;
    }
}`;

export const mainCode = `int even = 0;
int odd = 0;
for(int i = 1; i <= 10; i++) {
    if(i % 2 == 0) {
		even++;
	} else {
		odd++;	
	}
}
printf("Even : %d, Odd : %d", even, odd);
`;

export const cannotFindSymbol = `int num1 = 2;
// int num2 = 5;
for(int i = 1; i <= 10; i++) {
    if(i % 2 == 0) {
		num1++;
	} else {
		num2++;	
	}
}
printf("Even : %d, Odd : %d", even, odd);

//num2라는 변수를 선언하지 않아 에러 발생!
java: cannot find symbol
  symbol:   variable num2
  location: class javaStudy.Error1
`;

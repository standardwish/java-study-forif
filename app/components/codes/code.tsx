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
export const assignment2 = `package study;
import java.util.*;

public class Week1_2 {
    private static int num1, num2;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        num1 = sc.nextInt();
        num2 = sc.nextInt();

        System.out.println("합 : " + (num1 + num2));
        System.out.println("차 : " + (num1 - num2));
        System.out.println("곱 : " + (num1 * num2));
        System.out.println("몫 : " + (num1 / num2));
        System.out.println("나머지 : " + (num1 % num2));
    }
}`;
export const assignment3 = `package study;
import java.util.*;
public class Week2_1 {
    private static int N;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        int count = 1;
        while(count < 10){
            System.out.println(N + " * " + count + " = " + N * count);
            count ++;
        }
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

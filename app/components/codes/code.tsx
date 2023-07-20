export const assignment1 = `package week2;
public class People {
      private String name;
      private int age;
      private int height;
  
      public People(String name, int age, int height) {
          this.name = name;
          this.age = age;
          this.height = height;
      }
  
      @Override
      public String toString() {
          return "이름은 " + name +" 나이는 " + age + "살, 키는 " + height + "입니다.";
      }
}
`;

public class arguments {

    public static void main(Integer args) {
        int x = 42;

        int y = 4_3;

        if (args == y) {
            System.out.println("Success!");
        }

        if (x != y) {
            System.out.println("Failure.");
        }
    }
}

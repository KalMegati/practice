public class arguments {

    public static void main(String[] args) {


        System.out.println(args[0]);

        System.out.println(args[1]);

        System.out.println(args[1]+args[0]);

        if (args[0].equals(args[1])) {
            System.out.println("TWIN");
        }

        // if (x != y) {
        //     System.out.println("Failure.");
        // }
    }

    // public static int intermediate() {
    //     return 5;
    // }
}

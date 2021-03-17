abstract class HelloWorld {
    public static void main(String[] args) {
        System.out.println(intermediate(args)); 
    }

    public static int intermediate(String[] args) {
        return (Integer.valueOf(args[0]));
    }
}

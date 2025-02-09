class Singleton {
    private static Singleton instance = null;

    private Singleton() {
        // Exists only to defeat instantiation.
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

public class SingletonPattern {
    public static void main(String[] args) {
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();

        if (s1 == s2) {
            System.out.println("Objects are the same");
        } else {
            System.out.println("Objects are different");
        }
    }
}

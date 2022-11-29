import java.util.*;
import java.lang.Exception;

public class Main
{
	public static void main(String[] args) {
// 		System.out.println("Hello World");
        Scanner in = new Scanner(System.in);
        

        System.out.println("Type your sentence");
        String sentence = in.nextLine();
                
        char letter1= ' ';
        
        
        // checking the edge case:
        boolean flag = true;
        while(flag){
            try {
                System.out.println("Type your letter");
                String letter = in.nextLine();
                
                if(letter.length()>1){
                    throw new Exception("Must be single character");
                }
                
                letter1 = letter.charAt(0);
                flag = false;
            } catch(Exception e) {
                System.out.println("please enter only one character");
            }
        }
        
        
        int length = sentence.length();
        
        // now check for the input 
        
        for(int index = 0; index<length; index++){
            final char ch = sentence.charAt(index);
            if(ch == letter1){
                System.out.println(sentence.substring(index+1, length));
                return;
            }

            // if the leter deosnot exists in the sentence

            if(index == length-1){
                System.out.println("The letter does not exist in the sentence.");
            }
        }
	}
}

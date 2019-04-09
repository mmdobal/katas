# Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.

# Examples:

# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

#Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac




def longest(s1, s2):
    result = ''
    
    count = {}
    for s in s1 + s2:
      if s in count:
        count[s] += 1
      else:
        count[s] = 1

    for key in count:
        result += key
        
    return ''.join(sorted(result))
The most useful way to tackle these kind of problems is using reverse engineering. And for that your peer needs many examples - more than provided.

One way to create examples is by generating them manually. A much more efficient way would be implementing an encryption function (which is straightforward), and using it for testing. Encourage your peer to do so.

The simplest solution to this question is to decrypt one letter at a time, each time using the letters already decrypted. If your peer is stuck, advise them to try finding the relations between the previous decrypted letter and the current encrypted one.

If your peer needs further assistance, try guiding them towards the equation: enc[n] = dec[n] + secondStep[n-1] + 26m, which is fully explained in the solution.

Your peer should be given full score only if they succeed building and testing an efficient decryption function, without any hints. The function should be of O(N) complexity both in terms of time and space.

Make sure your peer gives an accurate complexity analysis, and whether the function they implemented is more efficient when used once on one long word, or many times when used on rather short words.
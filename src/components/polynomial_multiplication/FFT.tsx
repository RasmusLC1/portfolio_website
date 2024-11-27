import SlideTemplate from "../dungeon_crawler/SlideTemplate";

const FFT = () => {
  const slides = [
    {
      image: `${import.meta.env.BASE_URL}/pictures/bachelor/Recursive_fft.png`,
      description: "Basic Recursive FFT algorithm without optimisations",
    },
    {
      image: `${
        import.meta.env.BASE_URL
      }/pictures/bachelor/karatsuba_optmised.png`,
      description: "Optimised FFT algorithms",
    },
  ];

  const codeString = `
// Extended FFT function with allocated_memory parameters
void Recursive_FFT_ext(complex double *input, int n, complex double *out,
            complex double *allocated_memory, int allocated_memory_size) {
    // Check if n == 1 and return f(1) (f[0])
    if (n == 1) {
        out[0] = input[0];
        return;
    }

    // Save n/2 in a variable to save computations
    int n_half = n >> 1;

    // Use the passed allocated_memory instead of allocating memory
    // set pointer to start of allocated_memory
    complex double *even_values = allocated_memory;
    // set pointer to the second quarter of allocated memory
    complex double *odd_values = allocated_memory + n_half; 
    // set pointer to the third quarter of allocated memory
    complex double *out_even_values = odd_values + n_half;
    // set pointer to the fourth quarter of allocated memory
    complex double *out_odd_values = out_even_values + n_half;

    // Seperate into odd and even numbers
    int i_double = 0;
    for (int i = 0; i < n_half; i++) {
        i_double = i << 1;
        even_values[i] = input[i_double];
        odd_values[i] = input[i_double + 1];
    }

    // Double recursive call, half the allocated memory since we are splitting the data
    // Here there are 2 recursive calls, which each split the array in half, therefore:
        // T(n) = 2T(n/2) + O(n)
    // Applying the master theorem, here log_2(2) = 1 and C = 1 because f(n) = O(n)
    // Therefore we get the second option and our runtime becomes:
        // T(N) = Θ(n log n)
    Recursive_FFT_ext(even_values, n_half, out_even_values,
                        out_odd_values + n_half, allocated_memory_size);
    Recursive_FFT_ext(odd_values, n_half, out_odd_values,
                        out_odd_values + n_half, allocated_memory_size);

    // Compute the FFT output
    complex double tmp = 0;
    complex double w = 1;
    complex double w_n = cexp(-I * TAU / n);
    for (int k = 0; k < n_half; k++) {
        // Use defined TAU to save multiplication and calculate e^{−i*TAU*n/k​}
        // directly in tmp to save calculations
        tmp = w * out_odd_values[k];
        out[k] = out_even_values[k] + tmp;
        out[k + n_half] = out_even_values[k] - tmp;
        w *= w_n;
    }
}

// FFT function to allocate memory and call actual FFT functionn
void Recursive_FFT(complex double *input, int n, complex double *out) {
    // Assign memory outside the recursive loop to save overhead
    // We need 4 arrays, in_even, in_odd, out_even and out_odd. Therefore we need 4 * n
    int n_bitshifted = n << 2; // * 4
    complex double *allocated_memory = (complex double *) malloc(n_bitshifted *
                                        sizeof(complex double));
    
    // Call the actual function
    Recursive_FFT_ext(input, n, out, allocated_memory, n);
    free(allocated_memory);

}

///////////////////////////////////////////
void Iterative_FFT(complex double* input, int n, complex double* output) {
    int reverse_bit;
    // bit reversal of the given array, this step from pseudocode: bit-reverse-copy(a, A)
    // Example: Index 3: 011 (binary) → Bit-reversed: 110 → Reverse index 6
    // so instead of working with index 3, we are now working with index 6
    // This reorders the array elements and allows them to be merged more efficiently
    int log2n = log2(n);

    for (unsigned int i = 0; i < n; i++) {
        reverse_bit = Bit_Reverse(i, log2n);
        output[i] = input[reverse_bit];
    }

    int fft_segment_length, fft_half_segment_length;
    complex double unity_root_factor, segment_root_of_unity,
                    twiddle_factor, tmp;
    // FFT computation
    // The outer loop runs log_2(n) times, but within the loops it will cover all n
    // elements, therefore the runtime is O(n log n) times.
    for (int s = 1; s <= log2n; s++) {
        fft_segment_length = 1 << s; // pow(2, s)
         // Principal root of unity for the current segment
        segment_root_of_unity = cexp(-I * TAU / fft_segment_length);

        for (int k = 0; k < n; k += fft_segment_length) {
            // Initialize unity root factor (ω) to 1, use 0*I to create complex number
            unity_root_factor = 1 + 0 * I;
            fft_half_segment_length = fft_segment_length >> 1; // /2
            for (int j = 0; j < fft_half_segment_length; j++) {
                // Twiddle factor application: https://en.wikipedia.org/wiki/Twiddle_factor
                twiddle_factor = unity_root_factor *
                                output[k + j + fft_half_segment_length];
                tmp = output[k + j];

                // Applying FFT butterfly updates
                output[k + j] = tmp + twiddle_factor;
                output[k + j + fft_half_segment_length] = tmp - twiddle_factor;

                // Update the unity root factor
                unity_root_factor *= segment_root_of_unity;
            }
        }
    }
}

// Utility function for reversing the bits
// of given index x
unsigned int Bit_Reverse(unsigned int x, int log2n) {
    int n = 0;
    for (int i = 0; i < log2n; i++) {
        n <<= 1; // Shift n one left (n *= 2)
        // (x & 1) finds the least signifcation bit of x, if that bit is 1, then it evaluates to 1
        // else 0.
        // n |= sets n to 1 if (x & 1) returns 1. 1 = true and 0 = false, in logic
        // false or true = true, the rest of the outcomes won't affect it:
        // t | t = t, t | f = t, f | t = t, f | f = f
        n |= (x & 1); 
        x >>= 1; // shift x one right (x /= 2)
    }
    return n;
}

`;

  const description = (
    <div className="text">
      <p className="description">
        Implemented both Recursive and Iterative Fast Fourier Transform (FFT)
        algorithms.
      </p>
      <ul className="features">
        <li>
          Made Recursive FFT 1.7x faster by precalculating twiddle factors and
          improving memory usage
        </li>
        <li>
          Implemented Iterative FFT, achieving a 10x speedup compared to Recursive
          FFT
        </li>
      </ul>
    </div>
  );

  return (
    <SlideTemplate
      id="fft"
      headline="FFT ALGORITHM"
      description={description}
      codeString={codeString}
      language="c"
      slides={slides}
    />
  );
};

export default FFT;

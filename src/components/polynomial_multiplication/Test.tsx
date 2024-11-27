import SlideTemplate from "../dungeon_crawler/SlideTemplate";

const TEST = () => {
  const slides = [
    {
      image: `${
        import.meta.env.BASE_URL
      }/pictures/bachelor/graph_including_dft.png`,
      description: "Performance with DFT algorithm",
    },
    {
      image: `${
        import.meta.env.BASE_URL
      }/pictures/bachelor/graph_excluding_02flag.png`,
      description: "Performance without the 02flag",
    },
    {
      image: `${
        import.meta.env.BASE_URL
      }/pictures/bachelor/graph_excluding_dft.png`,
      description: "Performance with 02flag",
    },
  ];

  const codeString = `
// Whitebox tests
void Test_Setup(){
    mpz_inits(global_a_value, global_b_value, NULL);
    Basic_Math_Setup();
    mpz_clears(global_a_value, global_b_value, NULL);

    mpz_inits(global_a_value, global_b_value, NULL);
    Zero_Setup();
    mpz_clears(global_a_value, global_b_value, NULL);

    mpz_inits(global_a_value, global_b_value, NULL);
    Large_Numbers_test_Setup();
    mpz_clears(global_a_value, global_b_value, NULL);

    mpz_inits(global_a_value, global_b_value, NULL);
    Negative_Setup();
    mpz_clears(global_a_value, global_b_value, NULL);
    
    mpz_inits(global_a_value, global_b_value, NULL);
    Even_Polynomial_Setup();
    mpz_clears(global_a_value, global_b_value, NULL);

    mpz_inits(global_a_value, global_b_value, NULL);
    Uneven_Polynomial_Setup();
    mpz_clears(global_a_value, global_b_value, NULL);
}


START_TEST(Karatsuba_test_basic_multiplication) {

    // Verify with naive approach
    int* global_expected_result = (int *)malloc(n * sizeof(int));
    memset(global_expected_result, 0, n * sizeof(int));
    Polynomial_Multiply_Naive(global_a_value, global_b_value, n, global_expected_result);


    // Compute polynomial multiplication using DFT
    int result_karatsuba[n];
    memset(result_karatsuba, 0, n * sizeof(int));
    polynomial_multiply_karatsuba(global_a_value, global_b_value, n, result_karatsuba); 
    if (!Polynomial_Correctness(result_karatsuba, global_expected_result, n)) {
        gmp_printf("Karatsuba result was %Zd, expected %Zd\n", result_karatsuba, global_expected_result);
        ck_abort_msg("Karatsuba did not produce the expected result.");
        ck_assert_int_eq(1, 0);
    }
}
END_TEST

START_TEST(Recursive_FFT_test_basic_multiplication) {

    // Verify with naive approach
    int* global_expected_result = (int *)malloc(n * sizeof(int));
    memset(global_expected_result, 0, n * sizeof(int));
    Polynomial_Multiply_Naive(global_a_value, global_b_value, n, global_expected_result);

    int result_Recursive_FFT[n];
    memset(result_Recursive_FFT, 0, n * sizeof(int));
    polynomial_multiply_Recursive_FFT(global_a_value, global_b_value, n, result_Recursive_FFT); 
    if (!Polynomial_Correctness(result_Recursive_FFT, global_expected_result, n)) {
        gmp_printf("Recursive FFT result was %Zd, expected %Zd\n", result_Recursive_FFT, global_expected_result);
        ck_abort_msg("Recursive FFT did not produce the expected result.");
        ck_assert_int_eq(1, 0);
    }
}
END_TEST

START_TEST(Iterative_FFT_test_basic_multiplication) {

    // Verify with naive approach
    int* global_expected_result = (int *)malloc(n * sizeof(int));
    memset(global_expected_result, 0, n * sizeof(int));
    Polynomial_Multiply_Naive(global_a_value, global_b_value, n, global_expected_result);


    // Compute polynomial multiplication using DFT
    int result_Iterative_FFT[n];
    memset(result_Iterative_FFT, 0, n * sizeof(int));
    polynomial_multiply_iterative_FFT(global_a_value, global_b_value, n, result_Iterative_FFT); 
    if (!Polynomial_Correctness(result_Iterative_FFT, global_expected_result, n)) {
        gmp_printf("Iterative FFT result was %Zd, expected %Zd\n", result_Iterative_FFT, global_expected_result);
        ck_abort_msg("Iterative FFT did not produce the expected result.");
        ck_assert_int_eq(1, 0);
    }
}
END_TEST

void Large_Numbers_tests(TCase *tc_large) {
    gmp_randstate_t state;
    gmp_randinit_default(state);
    gmp_randseed_ui(state, time(NULL));
    n = 1024;

    for (int i = 0; i < 10; i++) {
        mpz_urandomb(global_a_value, state, n);
        mpz_urandomb(global_a_value, state, n);
        Call_Test(tc_large);
    }

    gmp_randclear(state);

}

Suite* Large_Numbers_Tests_Suite(void) {
    Suite *s = suite_create("Large Numbers Suite");
    
   // Create test case for zero multiplication tests
    TCase *tc_large = tcase_create("LargeNumbersHandling");
    Large_Numbers_tests(tc_large);
    suite_add_tcase(s, tc_large);
    return s;
}


void Large_Numbers_test_Setup(){
    SRunner *sr = srunner_create(Large_Numbers_Tests_Suite());
    srunner_run_all(sr, CK_NORMAL);
    srunner_free(sr);
}

void Negative_Tests(TCase *tc_negative) {
    n = 8;

    mpz_set_str(global_a_value, "-50", 10);
    mpz_set_str(global_a_value, "52", 10);

    Call_Test(tc_negative);

}


Suite* Negative_Test_suite(void) {
    Suite *s = suite_create("NegativeSuite");
    
   // Create test case for zero multiplication tests
    TCase *tc_negative = tcase_create("NegativeHandling");
    Negative_Tests(tc_negative);
    suite_add_tcase(s, tc_negative);
    return s;
}


void Negative_Setup(){
    SRunner *sr = srunner_create(Negative_Test_suite());
    srunner_run_all(sr, CK_NORMAL);
    srunner_free(sr);
}

// Runtime tests
void Runtime_test_systematic() {
    // Set up correctness meassure
    int fail = 0, n = 0;
    mpz_t random_Value_a, random_Value_b;

    // Seed the random state with current time
    gmp_randstate_t state;
    gmp_randinit_default(state);
    gmp_randseed_ui(state, time(NULL));

    // Set up timers
    double time_naive = 0.0, time_dft = 0.0, time_fft = 0.0,
            time_iterative_fft = 0.0, time_karatsuba = 0.0;


    // Open the file in write mode ("w")
    FILE *file;
    file = fopen("test/Computation_times.txt", "w");

    // Check if the file was opened successfully
    if (file == NULL) {
        printf("Error opening file!\n");
        exit(1);
    }
    int max_n_size = 16;
    int n_array[20];

    float naive_time_array[20], karatsuba_time_array[20], dft_time_array[20], recursive_fft_time_array[20], iterative_fft_time_array[20];
    for (int i = 1; i <= max_n_size; i++) {
        n = pow(2, i);
        n_array[i] = n;
        // Allocate memory in each iteration for new n value,
        // Using Realloc will cause issues if more iterations are being done
        int* naive_result = (int *)malloc(n * sizeof(int));
        int* dft_result = (int *)malloc(n * sizeof(int));
        int* karatsuba_result = (int *)malloc(n * sizeof(int));
        int* recursive_FFT_result = (int *)malloc(n * sizeof(int));
        int* iterative_FFT_result = (int *)malloc(n * sizeof(int));


        // Set all the relevant memory to 0 for clean test
        memset(naive_result, 0, n * sizeof(int));
        memset(karatsuba_result, 0, n * sizeof(int));
        memset(dft_result, 0, n * sizeof(int));
        memset(recursive_FFT_result, 0, n * sizeof(int));
        memset(iterative_FFT_result, 0, n * sizeof(int));


        // Generate a random number with n bits
        mpz_inits(random_Value_a, random_Value_b, NULL);
        mpz_urandomb(random_Value_a, state, n);
        mpz_urandomb(random_Value_b, state, n);

        // Standard TEST
        time_naive = Polynomial_Multiply_Naive(random_Value_a, random_Value_b, n, naive_result);
        naive_time_array[i] = time_naive;

        // DFT TEST
        time_dft = polynomial_multiply_DFT(random_Value_a, random_Value_b, n, dft_result);
        dft_time_array[i] = time_dft;

        // Recursive FFT test
        time_fft = polynomial_multiply_Recursive_FFT(random_Value_a, random_Value_b, n, recursive_FFT_result);
        recursive_fft_time_array[i] = time_fft;

        // Iterative FFT test
        time_iterative_fft = polynomial_multiply_iterative_FFT(random_Value_a, random_Value_b, n, iterative_FFT_result);
        iterative_fft_time_array[i] = time_iterative_fft;

        // Karatsuba test
        time_karatsuba = polynomial_multiply_karatsuba(random_Value_a, random_Value_b, n, karatsuba_result);
        karatsuba_time_array[i] = time_karatsuba;

        // DFT can be removed on second line if it's to slow
        if (Polynomial_Correctness(naive_result, karatsuba_result, n)  &&
            Polynomial_Correctness(naive_result, dft_result, n)  &&
            Polynomial_Correctness(naive_result, recursive_FFT_result, n)  &&
            Polynomial_Correctness(naive_result, iterative_FFT_result, n)){     
        }else{
            exit(1);
        }

        // Free the memory so we can malloc it again and have clean data
        free(naive_result);
        free(dft_result);
        free(karatsuba_result);
        free(recursive_FFT_result);
        free(iterative_FFT_result);
        mpz_clears(random_Value_a, random_Value_b, NULL);

        Loading_Screen(max_n_size, i);
    }
    gmp_randclear(state);

    // Print to file that Python code can read
    putchar('\n');
    fprintf(file, "n_size:\t");
    for (int i = 1; i <= max_n_size; i++) {
        fprintf(file, "%d ", n_array[i]);
    }
    fprintf(file, "\nNaive multiplication:\t");
    for (int i = 1; i <= max_n_size; i++) {
        fprintf(file, "%f ", naive_time_array[i]);
    }
    fprintf(file, "\nDFT multiplication:\t");
    for (int i = 1; i <= max_n_size; i++) {
        fprintf(file, "%f ", dft_time_array[i]);
    }
    fprintf(file, "\nKaratsuba multiplication:\t");
    for (int i = 1; i <= max_n_size; i++) {
        fprintf(file, "%f ", karatsuba_time_array[i]);
    }
    fprintf(file, "\nRecursive_FFT multiplication:\t");
    for (int i = 1; i <= max_n_size; i++) {
        fprintf(file, "%f ", recursive_fft_time_array[i]);
    }
    fprintf(file, "\nIterative_FFT multiplication:\t");
    for (int i = 1; i <= max_n_size; i++) {
        fprintf(file, "%f ", iterative_fft_time_array[i]);
    }

    fclose(file);

}

`;

  const description = (
    <div className="text">
      <p className="description">
        Developed and tested performance improvements using C libraries and
        features.
      </p>
      <ul className="features">
        <li>
          Achieved 3.5x faster performance by enabling the O2 optimization flag
        </li>
        <li>Explored and practiced using C libraries like Check and GMP</li>
        <li>
          Conducted extensive tests for correctness, memory safety, and
          performance
        </li>
      </ul>
    </div>
  );

  return (
    <SlideTemplate
      id="testing"
      headline="TESTING SETUP"
      description={description}
      codeString={codeString}
      language="c"
      slides={slides}
    />
  );
};

export default TEST;

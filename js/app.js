function fib_iter($n)
{
    if($n <= 2)
    {
        return 1;
    }
    else
    {
        $a = 1;
        $b = 1;
        $c = 0;
        for($i=0; $i<$n-2; $i++)
        {
            $c = $a + $b;
            $a = $b;
            $b = $c;
        }
        return $c;
    }
}

console.log(fib_iter(1000));
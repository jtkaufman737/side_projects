<html>
  <p>
    <?php
    $myName='Joy Kaufman';
    $partial = substr($myName,2,5);
    print $partial;
    ?>
  </p>
  <p>
    <?php
    $uppercase=strtoupper($myName);
    print $uppercase;
    ?>
  </p>
  <p>
    <?php
    $lowercase= strtolower($uppercase);
    print $lowercase;
    ?>
  </p>
</html>

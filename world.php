<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
$country = $_GET['country'];
$allCountry = $_GET['all'];


if (isset($country) && !empty($country) && $country == true)
{
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
        foreach ($results as $row) {
            echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
        }
    echo '</ul>';
}

else if (isset($allCountry) && $allCountry == true && !empty($allCountry))
{
   $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $stmt = $conn->query("SELECT * FROM countries");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
        foreach ($results as $row) {
            echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
        }
    echo '</ul>'; 
}

else if (isset($country) == false && isset($allCountry) == false && empty($allCountry) && empty($country))
{ 
    echo " ";
}